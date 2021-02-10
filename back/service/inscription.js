import SchtroumpfSchema from '../models/SchtroumpfSchema.js'

const inscription = (body, res) => {
    SchtroumpfSchema.findOne({ id: body.id }).then(data => {
        if (data) res.status(500).send('Id already use')
        else {
            SchtroumpfSchema.create(body, (err, data) => {
                if (err)
                    res.status(500).send(err)
                else
                    res.status(201).send(data)
            })
        }
    })
}

export { inscription }