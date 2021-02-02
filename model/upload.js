const mongoose = require('mongoose')

const newproductSchema = new mongoose.Schema( {
    image: String,
    product: String,
    category:String,
    price:Number,
    description:String
})
module.exports = mongoose.model("Product", newproductSchema );