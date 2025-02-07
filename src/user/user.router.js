//Rutas de usuario

import { Router } from 'express';
import { getAll,
        getOne,
        update
                } from './user.controller.js';
import { validateJwt } from '../../middlewares/validate.jwt.js';
import { updateUserValidator } from '../../middlewares/validators.js';
const api = Router()

//Rutas privadas 
api.get('/:id',getOne)
api.get('/',getAll) 
                      //Lo inyecta  & lo llama  
api.put('/update/:id', [validateJwt, updateUserValidator],update)

export default api;