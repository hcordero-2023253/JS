//Gestionar logica de autenticacion
import User from '../user/user.model.js';
import { checkPassword, encrypt } from '../../utils/crypto.js';
import { generateJwt } from '../../utils/jwt.js';

//Esto es recomendable para saber si todos los archivos estan conectado 
export const test = (req, res)=>{
    console.log('Test is running')
    res.send({message: 'Test is running'})
}

//Register
export const register = async (req, res) => {
    try {
        //Capturar los datos
        let data = req.body;
        //Crear el objeto del modelo agregandole los datos capturados
        let user = new User(data);
        //Encriptar la password
        user.password = await encrypt(user.password);
        //Asignar rol por defecto
        user.role = 'USER';
        //Asignar profilePicture
        user.profilePicture = req.file.filename ?? null 
        //Guardar
        await user.save();
        //Responder al usuario
        return res.send({message: `Registered successfully, can be logged with username: ${user.username}`});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Error al registrar usuario',error});
        
    }
}

//Login
export const login = async (req, res) => {
    try {
        //Capturar los datos(body)
        let {username, password} = req.body;
        //Validar qie el usuario existe
        let user = await User.findOne({username});
        
        if(user && await checkPassword(user.password, password)){
            //MAS ADELANTE: Generar el token
            let loggerUser={
                uid: user._id,
                username: user.username,
                name: user.name,
                role: user.role
            }
            let token = await generateJwt(loggerUser);
            return res.send({
                message: `Welcome ${user.name} you are logged in`,
                loggerUser,
                token
            })
        }
        //Responder al usuario
        return res.status(400).send({message: 'Invalid credentials'});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message:'Generar error with login',error})
    }
}