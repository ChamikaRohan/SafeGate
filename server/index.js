const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL;

mongoose.connect(DB)
.then(console.log("Database is connected succesfully!"))
.catch((error)=>console.log("Database connection failed with error: ",err.message));

app.listen( PORT, (console.log(`Server is running on port: ${PORT}`)));