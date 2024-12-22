const mongoose=require("mongoose");

const connectdb=async()=>{
  
    return mongoose.connect(process.env.MONGO_URI);
}

module.exports=connectdb;
