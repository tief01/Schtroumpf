import e from 'express'
import SchtroumpfSchema from '../models/SchtroumpfSchema.js'

const verifLogin = (id, pass, res) => {
    SchtroumpfSchema.findOne({ id: id }).then((data) => {
        if(!data) return res.status(500).send('id non trouve')
        if (data.pass !== pass) res.status(500).send('couple id/pass ne correspond pas')
    })
}

const infoSchtroumpf = (id, res) => {
    SchtroumpfSchema.findOne({ id: id }).then(data => {
        if(data) res.status(200).send(data)
        else res.status(500).send('Schtroumpf non existant')
    })
}

export { verifLogin, infoSchtroumpf }