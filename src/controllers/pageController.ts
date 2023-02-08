import {Request, Response} from 'express'

export const home =  (req:Request,res:Response) =>{
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
