'use strict'

import jwt   from 'jsonwebtoken';

//Generar un nuevo token
export const generateJwt = async (paylod)=> {
    try {
        return jwt.sign(
            paylod,
            process.env.SECRET_KEY,{
                expiresIn: '3h',
                algorithm: 'HS256'
            }

        ) 
    } catch (error) {
        console.error(error);
        return error
    }
}