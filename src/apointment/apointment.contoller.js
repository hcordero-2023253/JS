import Cita from '../apointment/apointment.model.js';
import User from '../user/user.model.js';
import Animal from '../animal/animal.model.js';

export const crearCita = async (req, res) => {
   try {

    const {date, reason, state, user, animal} = req.body;

        //Validar que no exista una cita para la misma fecha y hora
        const citaExistente = await Cita.findOne({date});
        if (citaExistente) {
            return res.status(400).send({
                success: false,
                message: 'Already exists an appointment for this date and time'
            });
        }

        //Validar que el animal exista
        const animalExistente = await Animal.findById(animal);
        if(!animalExistente) {
            return res.status(400).send({
                success: false,
                message: 'Animal not found'
            });
        }

        //Validar que el usuario exista
        const userExistente = await User.findById(user);
        if(!userExistente) {
            return res.status(400).send({
                success: false,
                message: 'User not found'
            });
        }

        const cita = new Cita({
            date, 
            state, 
            reason,
            user, 
            animal
        });

        await cita.save();
        return res.status(201).send({
            success: true,
            message: 'Appointment created successfully',
            data: cita
        })
    
   } catch (error) {
        console.error(error);
        return res.status(500).send({
            success: false,
            message: 'No se pudo agregar',error
        })
   }
    
}