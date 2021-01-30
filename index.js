const cors = require("cors");
const express = require("express");
const stripePayment = require('./stripePayment')
const admin = require('./admin')
const app = express();
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use(express.json());
app.use(cors());

app.use('/',stripePayment)
app.use('/',admin)







const port = process.env.PORT || 8080
app.listen(port, ()=>{console.log(`server is running at port:${port}`)});
