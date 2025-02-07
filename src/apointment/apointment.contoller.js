import Cita from '../animal/animal.model';

//Crear cita validadndo
export const createCita = async (req, res) => {
    try {
        let { nombre , fecha, hora, motivo} = req.body;
        if(nombre || fecha || hora || motivo){
            return res.status(400).send({
                sucess: false,
                message: 'Faltan datos obligatorios'});
        }
        let cita = new Cita({nombre, fecha, hora, motivo});
        await cita.save();
    } catch (error) {
        console.error('Error dont create cita:', error);
        return res.status(500).send({
            success: false,
            message: 'Error dont create cita', error });
    }
}