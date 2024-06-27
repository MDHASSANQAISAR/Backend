require ('dotenv').config()

const express = require ('express')
const app=express()
// const port=3000;


app.get('/',(req,res)=>{
    res.send("hello world")
})


app.get('/twitter',(req,res)=>{
    res.send("hassanqaisar.com")
})

app.get('/login',(req,res)=>{
    res.send("login page")
})

app.get('/youtube',(req,res)=>{
    res.send(`watch youtube`)
})


app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${process.env.PORT}`)
})