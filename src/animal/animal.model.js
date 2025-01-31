import  { Schema, model } from "mongoose";

const animalSchema = Schema({
    name:{
        type: String,
        required: [true, 'Name is required']
    },
    description:{
        type: String,
        required: [true, 'Description is required'],
    },
    age:{
        type: Number,
        required: [true, 'Age is required'],  
    },
    type:{
        type: String,
        required: [true, 'Type is required'],
    },
    keeper:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Keeper is required']
    }
})

export default model('Animal', animalSchema); 