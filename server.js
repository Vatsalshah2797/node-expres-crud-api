//Include express package install using npm i express
const express = require("express");

//Include database configuration and install mongoose package to interact with mongodb
const connectDB = require("./config/dbConfig");

//Include dotenv package for get setting variables from .env file and install using npm i dotenv
const dotenv = require("dotenv").config();

//Get client request body using body parser for post request
const bodyParser = express.json();

//Aadd & call custom hhtp request error handler middleware
const errorHandler = require("./middleware/errorHandler");

//Connect to databse
connectDB();

//Create express application
const app = express();

//Set server port listen application
const port = process.env.PORT || 3004;

//Home page
app.get("/", (req, res) => {
    res.send("Welcome to the world of Node JS Express JS API Creation Project");
    //res.json({ message: "Welcome to the world of Node JS Express JS API Creation Project"});
});

//User body parser for get client request body 
app.use(bodyParser);

//Routes Defination
app.use(require("./routes/api"));

//custom middleware register
app.use(errorHandler);

//Server listen with port
app.listen(port, () => {
    console.log(`app is running and started on port ${port}`);
});