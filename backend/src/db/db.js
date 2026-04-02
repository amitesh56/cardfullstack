const mongoose = require("mongoose")

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("DB is connected")
}

module.exports = connectDB