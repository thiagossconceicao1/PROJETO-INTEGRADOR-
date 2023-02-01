import {Router, Request, Response} from 'express'
import { request } from 'http'

const router = Router()

router.get('/', (req:Request,res:Response) =>{
    res.render("pages/home")
})
 
export default router