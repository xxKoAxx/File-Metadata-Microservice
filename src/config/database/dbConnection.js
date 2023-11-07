const mongoose = require('mongoose')

async function dbConnect(){
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log('successfully connect to database!!')
    }
    catch(error) {
        console.log('Connect failure!!')
        console.log(error)
    }
}

module.exports = { dbConnect }