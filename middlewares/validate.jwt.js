//Validar los tokens

'use strict'

import jwt from 'jsonwebtoken'

export const validateJwt = async (req, res, next) => {
    try {
        //Obtener la llave de acceso privada al token
        let secretKey = process.env.SECRET_KEY;
        //Obtener el rojen de los headers
        let { authorization } = req.headers;
        //Verificar que venga el token
        if (!authorization) return res.status(401).send({ msg: 'Unauthorized' });
        let user = jwt.verify(authorization, secretKey)
        //Inyectar en la solicitud un nuevo parametro
        req.user = user;
        //next() = todo esta bien, que pase a la siguiente funcion
        next()
    } catch (error) {
        console.error(error);
        return res.status(401).send({message: 'Invalid credentials'})
    }
}