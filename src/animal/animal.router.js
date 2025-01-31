import { Router } from "express";
import {
    getAnimals,
    postAnimal,
    putAnimals,
    deleteAnimal} from '../animal/animal.controller.js';

const animal = Router()

animal.get('/getanimal', getAnimals);
animal.post('/postanimals', postAnimal);
animal.put('/putanimal/:id', putAnimals);
animal.delete('/deleteanimal/:id', deleteAnimal);

export default animal;