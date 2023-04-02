const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log(process.env.CONNECTION_STRING);
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connected to DB", connect.connection.host, connect.connection.name);
    } catch(err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;