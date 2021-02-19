const mongoose = require('mongoose')

const signupSchema = new mongoose.Schema( {
    name:{
        type:String,
        required:true,
        min:2,
        max:256
    },

    surname:{
        type:String,
        required:true,
        min:2,
        max:256
    },
    email:{
        type:String,
        require:true,
        min:6,
        max:256
    },
    password:{
        type:String,
        required:true,
        max:256,
        min:5
    },
    
    date:{
        type:Date,
        default:Date.now
    }
   
})
module.exports = mongoose.model("Customer", signupSchema );