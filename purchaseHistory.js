const router = require('express').Router()
const Customerpurchase = require('./model/purchaseHistoryModal')

router.post("/purchasehistory", async(req, res)=>{
     const customerpurchase = new Customerpurchase({
                customerId:req.body.customerId,
                purchase:req.body.cart,
                totalAmount:req.body.totalprice
        });
            try{
                const savedcustomerpurchase= await customerpurchase.save();
                console.log('database',savedcustomerpurchase)
                res.send({savedcustomerpurchase})
            }catch(error){
                res.send(error)
                console.log(error)
            }
    
})

  module.exports = router