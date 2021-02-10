import SchtroumpfSchema from '../models/SchtroumpfSchema.js'

const ajouterAmis = (id, body, res) => {
    SchtroumpfSchema.findOne({ id: id }).then(data => {
        if (!data) res.status(500).send('Schtroumpf non existant')
        else {
            SchtroumpfSchema.updateOne(data, { ...body, amis: (data.amis.includes(body.amis)?data.amis.filter((value, index) => {
                if(value!==body.amis) return value
            }):[...data.amis, body.amis]) })
            .then((data, err) => {
                if (err) res.status(500).send(err)
                else res.status(200).send({ id: id, update: body })
            })
        }
    })
}

export { ajouterAmis }