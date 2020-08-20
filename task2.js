const express = require('express')
const path= require('path')
const { request } = require('http')
const { response } = require('express')
const app=express()

let pathdir=path.join(__dirname,"/first")

console.log("Dir :"+pathdir)

console.log("File :"+__filename)
app.set("view engine","hbs")
app.use(express.static(pathdir))


app.get('/',(request,response)=>{
     //   app.use(express.static(pathdir))
    //response.send("Hello Express")
    response.render('index',{name:"YAsh",title:"Hello Yash Jain"})
})


app.get('/weather',(request,response)=>{
    if(!request.query.address){
        return response.send({
            error:"You hAve not Provide Address"
        })
    }
    response.send({
        forecast:"It is sunnyday",
        location:request.query.address
    })


})

app.get('/help',(request,response)=>{

    response.send("Help Task")
})

app.listen(3000,()=>{
    console.log("Server is running")
})