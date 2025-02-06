//Eliminar archivos si algo sale mal
import {unlink} from 'fs/promises'//Eliminar archivos
import { join } from 'path'//unir carpetas o archivos a carpetas

//Meddleware de eliminar
export const deleteFileOnError = async(error, req, res, next)=>{
    if(req.file && req.filePath){
                          //c://dev/adopsys/img/users | nombrearchivo.png
        const filePath = join(req.filePath ,req.file.filename)
        try {
            await unlink(filePath)
        } catch (error) {
            console.error('Error deleting file', error)
        }
    }
    if(error.status === 400 || error.errors){// === estricto | == abstracto
        return res.status(400).send(
            {
                success: false,
                message: 'Error registering user',
                error
            })
    } 
    return res.status(500).send(
        {
            success: false,
            message: error.message
        }
    )
}