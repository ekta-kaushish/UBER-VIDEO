const dotenv = require('dotenv')
dotenv.config()
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
const express = require('express')

const cors = require('cors');

const connectToDb = require('./db/db')
const app = express();
app.use(cors());

connectToDb();


app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

app.get('/' ,(req,res)=>{
    res.send('HEloo')
} )

module.exports= app;