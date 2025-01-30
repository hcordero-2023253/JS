//Modelo usuario

import {Schema, model} from 'mongoose';

const userSchema = Schema(
    {
        name:{
            type: String,
            //Mongo Validations (middLeware | intermediario que valida el parametro antes de guardar)
            required: [true,'Name is required'],
            maxLength:[25, `Can't be longer than 25 characters`]
        },
        surname:{
            type: String,
            required: [true,'Surname is required'],
            maxLength:[25, `Can't be longer than 25 characters`]
        },
        username:{
            type:String,
            required: [true,'Username is required'],
            unique: [true, 'Username is already taken'],//NO SE PUEDE REPETIR
            lowecase: true,
            maxLength:[15, `Can't be longer than 15 characters`]
        },
        email:{
            type:String,
            required: [true,'Email is required'],
            //Validacion personalizada:
            match:[/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g]//Regex para validar el email, pero no es recomendable usarlo aqui.
        },
        password:{
            type: String,
            required: [true,'Password is required'],
            minLength: [8, 'Password must be at least 8 characters long'],
            masLength: [100, 'Password can not be longer than 100 characters'],
            //match: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,16}$/gm]
        },
        phone:{
            type: String,
            required: [true,'Phone is required'],
            minLength: [9, 'Phone must be at least 9 digits long'],
            maxLength: [15, 'Phone can not be longer than 15 digits'],
            match: [/^\+[0-9]{1,3} [0-9]{3,5}-[0-9]{4}$/]
        },
        role:{
            type: String,
            required: [true,'Role is required'],
            uppercase: true,
            enum: ['ADMIN', 'USER']
        },

    }
)

//Crear y exportar el modelo
export default model('User', userSchema);