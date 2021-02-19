const router = require('express').Router()
const Customer = require('./model/signup')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: __dirname + '/.env'})
const tokenSecret = process.env.tokenSecret



router.post('/login', async(req, res)=>{
   
    console.log(req.body)
    //Checking if the email already exist in the DB
    const customer = await Customer.findOne({email:req.body.email})
    if(!customer) return res.send({errorMessage:'Email not found',status:400})
//password is correct
const validPassword = await bcrypt.compare(req.body.password, customer.password)
if(!validPassword) return res.send({errorMessage:'Password not correct',status:400})
//Create and assign a token
const token = jwt.sign({id:customer._id},tokenSecret);
res.header('auth-token',token).send({token,id:customer._id,name:customer.name,email:customer.email
    ,status:200})

})
module.exports = router