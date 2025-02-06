//Rutas de autenticacón
import { Router } from "express";
import {
        login,
        register,
        test,
        changePassword } from "./auth.controller.js";
        
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { registerValidattor } from "../../middlewares/validators.js";
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js";
import { deleteFileOnError } from "../../middlewares/delete.file.on.erros.js";

const api = Router()

//Rutas privadas 
api.get('/test',validateJwt,test)

//Rutas publicas
api.post('/register',[uploadProfilePicture.single("profilePicture")
        //Validar error
        ,registerValidattor
        //Ejecutar la validacion de errors (delete.file.on.errors.js)
        ,deleteFileOnError]
        ,register
)

api.post('/login', login)

api.put('/password', changePassword)
//Exporto las rutas
export default api;