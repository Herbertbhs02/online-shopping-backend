const router = require('express').Router()
const bodyParser = require('body-parser')
const Metalworks = require('./model/upload')
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req,res)=>{
    res.render('Admin')
})

router.post('/', (req,res)=>{
  //console.log(req.body.category)
    const metalworks = new Metalworks({
        image: req.body.image,
        product: req.body.product,
        category: req.body.category,
        description:req.body.description
      });

      metalworks.save(function(err){
        if (!err){
            res.redirect("/");
        }
      });
    
    
})

module.exports = router
