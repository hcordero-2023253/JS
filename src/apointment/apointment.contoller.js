import Cita from '../animal/animal.model';



export const obtenerCita = async (req, res) => {
    try {
        return res.send(await Cita.find());
    } catch (error) {
        console.error(error);
        return res.status(500).send({
                succes: false,
                message: 'Error al obtener cita',error
            }
        )
    }
}