const mongoose = require('mongoose')

const database = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('db connected');
    }
    catch (error) {
        console.log("db connection error", error.message);
    }
}

module.exports = {database}