//Rutas de autenticacón
import { Router } from "express";
import {
        login,
        register,
        test,
        postAnimal } from "./auth.controller.js";
        
import { validateJwt } from "../../middlewares/validate.jwt.js";

const api = Router()

//Rutas privadas 
api.get('/test',validateJwt,test)

//Rutas publicas
api.post('/register',register)
api.post('/login', login)

api.get('/animal', postAnimal)

//Exporto las rutas
export default api;