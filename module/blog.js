
const mongoose=require ('mongoose')
const schema= mongoose.Schema;
const blogschema=new schema({
    name :{ type:String,
            require:true
          },
    createdAt:{ type:Date,
                require:true
              },
    message : {type:String,
               require:true
              }
  
})

const Blog =mongoose.model('Blog',blogschema)
module.exports=Blog;