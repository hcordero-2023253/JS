import { Schema, model } from "mongoose";

const animalSchema = Schema(
    {
        name:{
            trype: String,
            required: [true, 'Name is required'],
            maxLength: [25, `Can't be longer than 25 characters`]
        },
        description:{
            type: String,
            required: [true, 'Description is required'],
            maxLength: [100, `Can't be longer than 100 characters`]
        },
        age:{
            type: Number,
            required: [true, 'Age is required'],  
        },
        type:{
            type: String,
            required: [true, 'Type is required'],
            enum: ['dog', 'cat', 'bird', 'fish', 'other'],
            maxLength: [10, `Can't be longer than 10 characters`]
        },
        keeper:{
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Keeper is required']
        }
    }
)

export default model('Animal', animalSchema); 