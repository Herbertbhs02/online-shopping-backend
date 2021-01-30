const router = require('express').Router()
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req,res)=>{
    res.render('Admin')
})

router.post('/', (req,res)=>{
    const productupdate = req.body
    console.log(`test1:${productupdate.image}`);
    console.log(`test2:${productupdate.product}`);
    console.log(`test3:${productupdate.category}`);
    console.log(`test4:${productupdate.price}`);
    console.log(`test5:${productupdate.description}`);
    res.render('Admin')
})

module.exports = router
