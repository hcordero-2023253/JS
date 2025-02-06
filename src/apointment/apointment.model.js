//Modelo Cita

import { Schema, model } from "mongoose";

const citaSchema = new Schema({
    date: { 
        type: Date.time(), 
        required: true 
    },
    state:{
        type:String,
    }
})