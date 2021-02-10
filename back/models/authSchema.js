import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'

const instance = mongoose.Schema({
    id: String,
    pass: String
})

// instance.plugin(bcrypt, { fields: ['pass'] })

export default mongoose.model('authentifications', instance)