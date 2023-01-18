const mongoose = require('mongoose')
mongoose.set('strictQuery', false);


const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(console.log('connected to mongo'))
    .catch(err=>console.log(err))
}

module.exports = connectDatabase