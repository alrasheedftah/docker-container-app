const express = require('express')


const app = express()

const PORT = 4000 ;

app.get("/",(req,res,next)=>{
    res.send("<h1> kksj  Hello Rasta  Iam ddd rasta </h1>")
})

app.listen(PORT , ()=>{
    console.log("Server Runing On Port ",PORT)
}) 