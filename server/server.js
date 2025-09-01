const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const PORT = process.env.PORT
const ProjectRoutes = require("./routes/project.routes");
const port = PORT;

require('./config/mongoose.config')

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }))
app.use(express.json(), express.urlencoded({ extended: true }));

ProjectRoutes(app);


require("./config/mongoose.config");


app.listen(port, () => console.log(`Server live on port: ${port}`));