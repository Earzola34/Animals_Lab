//import mongoose
const mongoose = require('mongoose');

//database configuration
const DATABASE_URL = 'mongodb+srv://sailorarzola:Neversummer160@cluster0.ocbrnqb.mongodb.net/test';


//mongoose connect to url
mongoose.connect(DATABASE_URL);

//export mongoose to models folder
module.exports = { mongoose };
