import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'

const instance = mongoose.Schema({
    id: String,
    pass: String,
    age: Number,
    famille: String,
    race: String,
    nourriture: String,
    amis: []
})


export default mongoose.model('Schtroumpfs', instance)