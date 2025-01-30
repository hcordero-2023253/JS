'use strict'

import { hash, verify } from 'argon2';

//Encriptar la password
export const encrypt = async (password) => {
    try {
        return await hash(password);
    } catch (error) {
        console.error(error);
        return error
    }
}

//Validar contraseña
export const checkPassword = async (hash, password) => {
    try {
        return await verify(hash, password)
    } catch (error) {
        console.error(error);
        return error
    }
}