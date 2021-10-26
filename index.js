const express=require('express')
const app=express()
const path=require('path')
let PORT = process.env.PORT||666

// let date=new Date()
// let hour=date.getHours()
// let day=date.getDay()
// if (hour>9&&hour<17&&day>0&&day<6){
//   console.log("welcome")
// }
// else{
//   console.log("we are close")
// }


// app.get('/',(req,res)=>res.send("<h1>hello</h1>"))
app.get('/',(req,res)=>res.sendFile(path.join(__dirname,"public","index.html")))
app.get('/services',(req,res)=>res.sendFile(path.join(__dirname,"public","services.html")))
app.get('/contact',(req,res)=>res.sendFile(path.join(__dirname,"public","contact.html")))
app.use(express.static(path.join(__dirname,"public")))


app.listen(PORT,err=>err?console.log(err):console.log(`server started: ${PORT}`))