const express=require("express")
const bodyParser = require('body-parser');
const mongoose=require('mongoose')
require('dotenv').config();

const timeline = require('./Router/timeline'); 

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

app.use(timeline); 





app.listen(4000, () => {
    console.log("Server is running on port 4000");
 });