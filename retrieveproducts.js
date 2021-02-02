const router = require('express').Router()
const Product = require('./model/upload')

router.get("/retrieveproducts", async(req, res)=>{
    //console.log(req.query.category) 
    const products = await Product.find({category:req.query.category})
    
    res.send(products)
  
  });

  module.exports = router