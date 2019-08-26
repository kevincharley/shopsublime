var express=require('express')
const path=require("path")
var mongoose=require("mongoose")
var url="mongodb://localhost/shopdb";
mongoose.connect(url,function(err){
    if(err) throw err
    else{
        console.log("db connected")
    }
})
var bodyparser=require("body-parser",)
var app=express();
//var cartrouter=require("./routs/cartrouter")
app.use(bodyparser.urlencoded({extended:true}))
var users=require("./model/user")
app.listen(3000,function(req,res){
console.log("server app init")
})
app.set("view engine","ejs")
app.set("views","./src/views")
app.use(express.static(path.join(__dirname,"/public")))

app.get("/",function(req,res){

    res.render("login")
});




//login

    //register
    app.post("/register",function(req,res){
        var u=new users();
        u.name=req.body.name;
        u.email=req.body.email;
        u.phonenumber=req.body.phonenumber;
        u.password=req.body.password
        u.role=req.body.role;
        u.save(function(err){
            if(err) throw err
            else{
                res.redirect("/")
            }
        })
        console.log()
   
    })
   