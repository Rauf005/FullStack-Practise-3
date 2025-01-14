const express=require("express")
const app=express()
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
let mongoose=require("mongoose")

app.use(bodyParser.json())
app.use(cors())
dotenv.config()


app.get("/",(req,res)=>{
    res.send("Welcome Node")   
})


let ArrivalsSchema = new mongoose.Schema({
    name:String,
   description:String,
   price:Number,
   image:String
})

let ArrivalsModel= mongoose.model("arrivals",ArrivalsSchema)



app.get("/arrivals", async (req,res)=>{
   let arrivals= await ArrivalsModel.find()
   res.send(arrivals)
})

app.get("/arrivals/:id",async (req,res)=>{
   let id=req.params.id
   let myarrivals= await ArrivalsModel.findById(id)
   res.send({
       message:"Success GetById",
       data:myarrivals
   })
})


app.delete("/arrivals/:id", async  (req,res)=>{
   let {id}=req.params
  await ArrivalsModel.findByIdAndDelete(id)
  res.send({
   message:"Success Delete",
})
})

app.post("/arrivals", async (req,res)=>{
   let newArrivals= ArrivalsModel(req.body)
  await newArrivals.save()
  res.send({
    message:"Success Post",
    data:req.body
  })
})


mongoose.connect(process.env.MongoURL)
.then(()=>{
    console.log("connected")
})

app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir")
})