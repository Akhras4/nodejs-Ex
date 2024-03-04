const express=require("express")
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
const Blog=require('./module/blog')
require('dotenv').config();

const app=express()
app.use(bodyParser.json());


const password = process.env.PASSWORD;
const dburi=`mongodb+srv://akhras:${password}@akhras.yjxfgn6.mongodb.net/`
mongoose.connect(dburi)
         .then((result)=>console.log('connected'))
         .catch((err)=> console.log('err'))

app.set("view engine", "ejs");
app.use(express.static("puplic"))
app.use(express.static("views"));
app.use(express.urlencoded({extended:true}))





app.get("/",(req,res)=>{
   res.render("indix") 
})

app.post("/timeline",(req,res,next)=>{
  let ti = new Date();
  const name=req.body.UserName
  console.log(name)
  const ms=req.body.ms
  console.log(ms)
  const blog = new Blog ({
    name:name,
    createdAt: ti,
    message:ms,
  });
  blog.save()
  console.log(blog)
  Blog.find()
      .then((result)=>res.render("timeline",{ result}))
      .catch((err)=>{console.log(err)})
})






app.listen(4000, () => {
    console.log("Server is running on port 4000");
 });