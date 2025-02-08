//Modelo Cita

import { Schema, model } from "mongoose";

const citaSchema = new Schema({
    reason:{
        type: String,
        required: [true, 'Reason is required']
    },
    date: { 
        type: Date, 
        required: [true, 'Date is required'] 
    },
    state:{
        type: String,
        uppercase: true,
        required: true,
        enum: ['PENDIENTE', 'ATENDIDO', 'CANCELADO']
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
    }
})

export default model('Cita', citaSchema);