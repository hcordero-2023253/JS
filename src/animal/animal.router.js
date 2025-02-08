import { Router } from "express";
import {
    getAnimals,
    postAnimal,
    putAnimals,
    deleteAnimal} from '../animal/animal.controller.js';
    import { validateJwt } from '../../middlewares/validate.jwt.js';    

const animal = Router()

animal.get('/getanimal',validateJwt ,getAnimals);
animal.post('/postanimals',validateJwt , postAnimal);
animal.put('/putanimal/:id',validateJwt , putAnimals);
animal.delete('/deleteanimal/:id',validateJwt , deleteAnimal);

export default animal;