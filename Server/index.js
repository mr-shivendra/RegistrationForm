const express=require('express')
const serverRouter=require('./routes/index.js')
const connection=require('./config/index.js')
const cors =require('cors')
require('dotenv').config()

const port =process.env.PORT//here the port of the server that you want to run at port

const server =express()
server.use(cors())

server.use(express.json())

server.use('/student',serverRouter)


server.get('/',async(req,res)=>{
    res.send('your server is running well')
})

server.listen(port,async()=>{
    try {
        await connection
        console.log(`http://localhost:${port}`)
    } catch (error) {
        console.log(`${error}`)
    }
})

module.exports=server