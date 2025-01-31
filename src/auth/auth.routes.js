//Rutas de autenticacón
import { Router } from "express";
import {
        login,
        register,
        test } from "./auth.controller.js";
        
import { validateJwt } from "../../middlewares/validate.jwt.js";
import { registerValidattor } from "../../middlewares/validators.js";
import { uploadProfilePicture } from "../../middlewares/multer.uploads.js";

const api = Router()

//Rutas privadas 
api.get('/test',validateJwt,test)

//Rutas publicas
api.post('/register',[uploadProfilePicture.single("profilePicture"),registerValidattor],register)
api.post('/login', login)

//Exporto las rutas
export default api;