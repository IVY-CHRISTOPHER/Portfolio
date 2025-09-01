const mongoose = require("mongoose");
const dotenv = require("dotenv")
const fs = require("fs");
const path = require("path");
const caFilePath = path.join(__dirname, "global-bundle.pem"); 

dotenv.config()


//Connect to DB
mongoose.connect
    (MongoDB_Connection_Point, {
        ssl: true,
        sslCA: fs.readFileSync(caFilePath),
        useNewUrlParser: true,
        useUnifiedTopology: true
    }),
    function (client) {
        //Specify the database to be used
        db = client.db('portfolio-site-db')
    }
        .then(() => console.log(`AWS DB Connected`))
        .catch((err) =>
            console.log(`Something went wrong when connecting to AWS DB`, err));
