import { Router } from "express";
import { crearCita } from "../apointment/apointment.contoller.js";
import { validateJwt } from "../../middlewares/validate.jwt.js";

const cita = Router()

cita.post('/crearCita',validateJwt, crearCita);

export default cita;