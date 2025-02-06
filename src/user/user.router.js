//Rutas de usuario

import { Router } from 'express';
import { getAll,
        getOne,
    } from './user.controller.js';
import { validateJwt } from '../../middlewares/validate.jwt.js';

const api = Router()

//Rutas privadas 
api.get('/:id',validateJwt,getOne)
api.get('/',validateJwt,getAll)


export default api;