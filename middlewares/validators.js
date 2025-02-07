//Validar campos en las rutas
import { body } from "express-validator";
import { validateErrors, validateErrorsFiles } from "./validate.errors.js";
import { existEmail, existUsername, notRequiredFlied } from "../utils/db.validator.js";


//Arreglo de validaciones (por cada ruta)
export const registerValidattor =[
    body('name','Name cannot be empty').notEmpty(),
    body('surname','Surname cannot be empty').notEmpty(),
    body('email','Email connot be empty').notEmpty().isEmail().custom(existEmail),
    body('username','Username cannot be empty').notEmpty().toLowerCase().custom(existUsername),
    body('password','Password cannot be empty').notEmpty().isStrongPassword().withMessage('The Passsword must be strong').isLength({min:8}),
    body('phone','Phone cannot be empty').notEmpty().isMobilePhone()   ,
    validateErrors
]

export const updateUserValidator =[
    body('username').optional().notEmpty().toLowerCase().custom((username, {req})=> existUsername(username, req.user)),
    body('email').optional().notEmpty().isEmail().custom((email, {req})=> existEmail(email, req.user)),
    body('password').optional().notEmpty().custom(notRequiredFlied),
    body('profilePicure').optional().notEmpty().custom(notRequiredFlied),
    body('role').optional().notEmpty().custom(notRequiredFlied),
    validateErrorsFiles
]