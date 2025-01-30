//Rutas de autenticacón
import { Router } from "express";
import {
        login,
        register,
        test } from "./auth.controller.js";
import { validateJwt } from "../../configs/middlewares/validate.jwt.js";

const api = Router()

api.get('/test',validateJwt,test)

//Ruatas publicas
api.post('/register',register)
api.post('/login', login)

//Exporto las rutas
export default api;