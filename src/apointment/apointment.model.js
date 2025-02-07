//Modelo Cita

import { Schema, model } from "mongoose";

const citaSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    date: { 
        type: Date, 
        required: true 
    },
    state:{
        type: String,
        uppercase: true,
        required: true,
        emum: ['PENDIENTE', 'ATENDIDO', 'CANCELADO']
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    animal:{
        type: Schema.Types.ObjectId,
        ref: 'Animal',
        required: [true, 'Animal is required']
    },
})

export default model('Cita', citaSchema);