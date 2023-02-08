import {Router, Request, Response} from 'express'
import * as pageController from '../controllers/pageController'
import * as userController from '../controllers/userController'

const router = Router()

router.get('/',pageController.home)

router.get('/mapa',pageController.mapa)

router.get('/faleconosco', pageController.faleconosco)

router.get('/sobrenos',pageController.sobrenos)
 
router.get('/usuario',pageController.usuario)

router.get('/cadastro', userController.cadastro)

router.get('/login',userController.login)







export default router