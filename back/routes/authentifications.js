import { Router } from 'express'
import { login, logout } from '../service/authentification.js'
import { verifLogin } from '../service/informations.js'

const router = Router()

router.post('/', (req, res) => {
    verifLogin(req.body.id, req.body.pass,res)
    login(req.body, res)
})

router.delete('/:id', (req, res) => logout(req.params.id, res))

export default router