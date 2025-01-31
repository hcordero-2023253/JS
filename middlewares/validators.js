//Validar campos en las rutas
import { body } from "express-validator";
import { validateErrors } from "./validate.errors.js";

//Arreglo de validaciones (por cada ruta)
export const registerValidattor =[
    body('name','Name cannot be empty')
        .notEmpty(),
    body('surname','Surname cannot be empty')
        .notEmpty(),
    body('email','Email connot be empty')
        .notEmpty().isEmail(),
    body('username','Username cannot be empty')
        .notEmpty().isLowercase(),
    body('password','Password cannot be empty')
        .notEmpty().isStrongPassword()
        .withMessage('The Passsword must be strong').isLength({min:8}),
    body('phone','Phone cannot be empty')
        .notEmpty().isMobilePhone()   ,
    validateErrors
]