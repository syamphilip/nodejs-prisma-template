const express=require('express');
const cors=require('cors');
const userRouter=require('./src/routes/user-router')

const app=express();

app.use(cors())
app.use(express.json())

app.use("/user",userRouter)

app.listen(4000,()=>console.log("SERVER IS RUNNING ON PORT 4000"))