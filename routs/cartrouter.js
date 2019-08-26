var express=require('express');
const router=express.Router();
var mongoose=require("mongoose")
var bodyparser=require("body-parser")
router.use(bodyparser.urlencoded({extended:true}))
router.get("/",function(req,res){
    res.render("cart")
})
module.exports=router;