const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema( {
   product: String,
   price: Number
   qty: Number
})



const purchaseSchema = new mongoose.Schema( {
    customerId: String,
    purchase: [cartSchema],
    totalAmount: Number
    
})
module.exports = mongoose.model("purchaseRecord", purchaseSchema );