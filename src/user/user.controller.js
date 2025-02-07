//Gestionar un perfil existente de usuario
import User from '../user/user.model.js';

//Obtener todos
export const getAll = async (req, res) => {
    try {
        //Configuraciones de paginacion
        const {limit = 5, skip = 0} = req.query
        //Consultar
        const users = await User.find()
            .skip(skip)
            .limit(limit)

        if (users.length === 0) {
            return res.status(404).send({ 
                success: false,
                message: 'No hay usuarios'
            });
        }
        return res.send({
            success: true,
            message: 'Usuarios obtenidos',
            users
        })
    } catch (error) {
        console.error('Error al obtener todos los usuarios:', error);
        return res.status(500).send({ message: 'Error al obtener usuarios', error });
    }
}

//Obtener un usuario por id
export const getOne = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) return res.status(404).send({
            success: false,
            message: 'Usuario no encontrado'
        })
        return res.send({
            success: true,
            message: 'Usuario encontrado', user
        })
    } catch (error) {
        console.error('Error al obtener un usuario:', error);
        return res.status(500).send({ 
            success: false, 
            message: 'Error al obtener usuario', error });
    }
}

//Actualizar datos generales
export const update = async (req, res) => {
    try {
        let {id} = req.params;
        let data = req.body;
        let user = await User.findByIdAndUpdate(id, data, { new: true }); 
        if (!user) return res.status(404).send({
            success: false,
            message: 'User not found'
        })
        return res.send({
            success: true,  
            message: 'Usuario actualizado', user
        })
    } catch (error) {
        console.error('Error al obtener un usuario:', error);
        return res.status(500).send({
            success: false,
            message: 'Error al actualizar usuario',error
        })
    }
}