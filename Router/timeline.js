const { Router } = require('express'); 
const app = Router(); 
const Blog=require('../module/blog')


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



  module.exports = app;