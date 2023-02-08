// cadastro e login
import {Request, Response} from 'express'

export const cadastro =  (req:Request,res:Response) =>{
    res.render("pages/cadastro")
}

export const login =  (req:Request,res:Response) =>{
    res.render("pages/login")
}
