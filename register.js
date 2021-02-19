
const router = require('express').Router()
const bodyParser = require('body-parser')
const Customer = require('./model/signup')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
router.use(bodyParser.urlencoded({ extended: true }));

require('dotenv').config({path: __dirname + '/.env'})
const tokenSecret = process.env.tokenSecret


router.post('/register', async(req,res)=>{
    
      //Checking if the user already exist in the DB
      const emailExist = await Customer.findOne({email:req.body.email})
      if(emailExist) return res.send({status:400,errorMessage:'Email already exist'})

      //hash password
const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const customer = new Customer({
        name:req.body.name,
        surname:req.body.surname,
        email:req.body.email,
        password:hashedPassword
        
    });
    try{
        const savedCustomer= await customer.save();
        console.log(savedCustomer)
        res.send({savedCustomer})
    }catch(error){
        res.send(error)
    }
   
})

module.exports = router

