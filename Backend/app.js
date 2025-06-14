const dotenv = require('dotenv')
dotenv.config()
const userRoutes = require('./routes/user.routes');

const express = require('express')

const cors = require('cors');

const connectToDb = require('./db/db')
const app = express();
app.use(cors());

connectToDb();


app.use('/users', userRoutes);


app.get('/' ,(req,res)=>{
    res.send('HEloo')
} )

module.exports= app;