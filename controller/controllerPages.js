const { model } = require('mongoose');
const Blog=require('../module/blog')

const home=((req,res)=>{
    res.render("indix") 
 })

const getData=((req,res,next)=>{
    let ti = new Date();
    const name=req.body.UserName
    console.log(name)
    const ms=req.body.ms
    console.log(ms)
    const blog = new Blog ({
        name:name,
        createdAt: ti,
        message:ms,
      })
    blog.save()
    Blog.find()
         .then((result)=>res.render("timeline",{ result}))
         .catch((err)=>{console.log(err)})
})


module.exports={
    home,
    getData,
}


