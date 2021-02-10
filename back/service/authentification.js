import authSchema from '../models/authSchema.js'

const login = (body, res) => {
    authSchema
        .findOne({ id: body.id })
        .then(data => {
            if (data)
                res.status(200).send(data)
            else {
                authSchema.create(body, (err, data) => {
                    if (err)
                        res.status(500).send(err)
                    else
                        res.status(201).send(data)
                })
            }
        })
}

const logout = (id, res) => {
    authSchema
        .findOne({ id: id })
        .then(data => {
            if (!data)
                res.status(500).send('User not connected')
            else {
                authSchema
                    .deleteOne({id: id})
                    .then((err, data) => {
                        if(err) res.status(500).send(err)
                        else
                            res.status(200).send(data)
                    })
            }
        })
}

export { login, logout }