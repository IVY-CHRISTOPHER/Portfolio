const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = process.env.BACKEND_PORT
const ProjectRoutes = require("./routes/project.routes");

require('./config/mongoose.config');

app.use(cors({ credentials: true, origin: 'http://18.116.33.192' }))
app.use(express.json(), express.urlencoded({ extended: true }));

ProjectRoutes(app);


app.listen(port, () => console.log(`Server live on port: ${port}`));