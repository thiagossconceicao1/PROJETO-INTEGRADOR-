import {Request, Response} from 'express'
import { sequelize } from '../config/mysql'

export const home = async (req:Request,res:Response) =>{

    /*
    testar conexão com o banco
    try{
        await sequelize.authenticate()
        console.log("Conexão estabelecida")
    }catch(error){
        console.log("deu erro", error)
    } */
    

    res.render("pages/home")

}

export const mapa = (req:Request,res:Response) =>{
    res.render("pages/mapa")
}

export const faleconosco = (req:Request,res:Response) =>{
    res.render("pages/faleconosco")
}

export const sobrenos = (req:Request,res:Response) =>{
    res.render("pages/sobrenos")
}

export const usuario = (req:Request,res:Response) =>{
    res.render("pages/usuario")
}
