const { Router } = require('express'); 
const app = Router(); 
const timeFun=require('../controller/controllerPages')


app.route("/")
    .get(timeFun.home)
    
app.route("/timeline")
   .post(timeFun.getData)


  module.exports = app;