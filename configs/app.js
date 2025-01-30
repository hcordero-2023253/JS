//Levantar servidor express (HTTP)

//Modular |+ efectiva + legible | tabaja en funciones

'use strict'

//ECModules | ESModules
import express from 'express'//Servidor HTTP
import morgan from 'morgan'//Logs
import cors from 'cors'//Acceso al API
import helmet from 'helmet'//Seguridad para HTTP
import authRoutes from '../src/auth/auth.routes.js'

//Configuraciónes de express
const configs = (app)=>{
    app.use(express.json())//Aceptar y enviar datos en JSON
    app.use(express.urlencoded({extended: true}))//No ecriptar la URL
    app.use(cors())
    app.use(helmet())
    app.use(morgan('dev'))
}

const routes = (app)=>{
    app.use(authRoutes)
}

//Ejecutar el servidor
export const initServer = ()=>{
    const app = express()
    try {
        configs(app)
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Servidor iniciado en el puerto ${process.env.PORT}`)
    } catch (error) {
        console.log('Server init failed',error)
    }
}