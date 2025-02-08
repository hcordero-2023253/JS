//Rutas de usuario

import { Router } from 'express';
import { getAll,
        getOne,
        update
                } from './user.controller.js';
import { validateJwt } from '../../middlewares/validate.jwt.js';
import { updateUserValidator } from '../../middlewares/validators.js';

const api = Router()

api.get('/:id',validateJwt,getOne)
api.get('/',validateJwt,getAll) 

                      //Lo inyecta  & lo llama  
api.put('/update/:id', [validateJwt, updateUserValidator],update)

export default api;