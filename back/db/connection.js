import mongoose from 'mongoose'

// mongodb admin, pass : KFR2KOYJKRpE2O7n 
const url = `mongodb+srv://admin:KFR2KOYJKRpE2O7n@cluster0.1y9yg.mongodb.net/pangolin?retryWrites=true&w=majority`

const connect = () => {
    console.log("Connexion à mongoDB...")
    mongoose.connect(url, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

export { connect }