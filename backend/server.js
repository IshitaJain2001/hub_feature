const express= require('express')
const env= require('dotenv').config()
const cors= require('cors')
const app= express()
const mongoose = require('mongoose')
console.log(env);

app.use(cors())
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("mongodb connected");
})
.catch((err)=>{console.log("error",err.message);
})
app.get('/', (req,res)=>{
    res.send("yes you are on page")
})
app.listen(process.env.PORT,()=>{
console.log(`Server is running http://localhost:${process.env.PORT} `)
})
