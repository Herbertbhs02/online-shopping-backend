const cors = require("cors");
const express = require("express");
const stripePayment = require('./stripePayment')
const register = require('./register')
const login = require('./login')
const admin = require('./admin')
const retrieveproducts = require('./retrieveproducts')
const purchaseHistory = require('./purchaseHistory')
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose')


app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.json());
app.use(cors());

require('dotenv').config({path:__dirname + '/.env'})

//mongoose.connect:Connecting to cloud mongoDB atlas 
const BAMBI_CONNECT = process.env.BAMBI_CONNECT
mongoose.connect(BAMBI_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
   (error)=>console.log(`Connection requested`))

app.use('/',stripePayment)
app.use('/',admin)
app.use('/',retrieveproducts)
app.use('/',purchaseHistory)
app.use('/',register)
app.use('/',login)


const port = process.env.PORT || 8080
app.listen(port, ()=>{console.log(`server is running at port:${port}`)});
