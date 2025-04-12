const express= require('express')
const env= require('dotenv').config()
const cors= require('cors')
const app= express()


app.use(cors())
app.get('/', (req,res)=>{
    res.send("yes you are on page")
})
app.listen(process.env.PORT,()=>{
console.log(`Server is running http://localhost:${process.env.PORT} `)
})
