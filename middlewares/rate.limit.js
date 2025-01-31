//Middleware de limitación de solicitudes
import reatLimit from "express-rate-limit";

export const limiter = reatLimit(
    {           //MIN|S|MS  
        windowMs: 10*60*1000, //Rango de tiempo
        max: 150, //Cantidad de preticiones permitidas de rango de tiempo
        message:{
            message: 'Your blocked, wait 15 minutes' 
        }
    }
)