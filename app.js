const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const app=express();
const dotenv=require("dotenv");

dotenv.config();
// middleware start
 app.use(cors());
 app.use(bodyParser.json());
// middlware end

// error haddle start
 app.all("*",(req,res)=>{
    try {
        res.status(404).json({status:"Not found"});
    } catch (error) {
        res.status(401).json(error.message);
    }
 })
 let Port=process.env.PORT || 5000
 app.listen(Port,()=>{
    console.log(`server is running http://localhost:${Port}`)
 })
 module.exports=app
// error haddle end