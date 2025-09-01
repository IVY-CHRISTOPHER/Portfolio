const mongoose = require("mongoose");
const dotenv = require("dotenv")

dotenv.config()


//Connect to DB
mongoose.connect
    ("mongodb://PortfolioDBMaster:DemonJoker12!@portfolio-site-db.cluster-ctg8g4swosxc.us-east-2.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false")
    .then(() => console.log(`AWS DB Connected`))
    .catch((err) =>
        console.log(`Something went wrong when connecting to AWS DB`, err),
        function (client) {
            //Specify the database to be used
            db = client.db('portfolio-site-db')
        });
