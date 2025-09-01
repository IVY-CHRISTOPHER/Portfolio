const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// const path = require('path')

// dotenv.config()
// const uri = process.env.MONGO_DB

mongoose
    .connect('mongodb://Chris:1234@mongodb:27017/mydatabase?authSource=admin')
    .then(() => console.log(`Docker DB Connected`))
    .catch((err) =>
        console.log(`Something went wrong when connecting to Docker DB`, err)
    );