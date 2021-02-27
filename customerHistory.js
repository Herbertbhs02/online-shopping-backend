const router = require('express').Router()
const Customerpurchase = require('./model/purchaseHistoryModal')

router.get("/customerHistory", async(req, res)=>{
    console.log(req.query.customerId) 
    const customerHistory = await Customerpurchase.find({customerId:req.query.customerId})
    console.log(customerHistory)
    
    res.send(customerHistory)
  
  });

  module.exports = router