import { Router } from "express";
import { obtenerCita } from "../apointment/apointment.contoller.js";


const cita = Router()

cita.get('/obtenerCita', obtenerCita);

export default cita;