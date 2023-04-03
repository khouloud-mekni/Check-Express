const express = require("express")
require('dotenv').config()
const app = express()
app.use(express.json())

app.use (checkWorkingHours = (req,res, next)=>{
    const date = new Date();
    const day = date.getDate();
    const hour = date.getHours();
    
    if (day >= 1 && day <= 5 && hour >= 9 && hour <= 17 ) {
        res.sendFile(__dirname+ "/Views/closed.html");
    } else {
        next();
    }})

app.use(express.static('Views'))
const PORT = process.env.PORT || 6000
app.listen(PORT , (err)=>{
     if (err) throw err
    console.log(`the server is running on ${PORT}`)
})