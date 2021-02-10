import { Router } from 'express'
import { ajouterAmis } from '../service/ajouterAmis.js'
import { inscription } from '../service/inscription.js'
import { infoSchtroumpf } from '../service/informations.js'

const router = Router()

router.get('/:id', (req, res) => infoSchtroumpf(req.params.id, res)  )

router.post('/', (req, res) => {
    inscription(req.body, res)
})

router.put('/:id', (req, res) => {
    ajouterAmis(req.params.id, req.body, res)
})

export default router 