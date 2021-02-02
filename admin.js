const router = require('express').Router()
const bodyParser = require('body-parser')

const Product = require('./model/upload')


router.use(bodyParser.urlencoded({ extended: true }));




router.get('/', (req,res)=>{
    res.render('Admin')
})

router.post('/', (req,res)=>{
    const product = new Product({
        image: req.body.image,
        product: req.body.product,
        category: req.body.category,
        price: req.body.price,
        description:req.body.description
      });

      product.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    
    
})

module.exports = router
