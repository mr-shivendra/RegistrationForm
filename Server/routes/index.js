const server=require('../index.js')
const express=require('express')
const DetailModel =require('../models/studentDetails.js')
const serverRouter=express.Router()


serverRouter.get('/details',async(req,res)=>{

    try {
         const details=await DetailModel.find()
         res.send(`${JSON.stringify({details})}`)
    } catch (error) {
        res.send(`${error}`)
    }
   
})

serverRouter.post('/details',async(req,res)=>{

    try {
        const {name,email,college,roll,course}=req.body
        const newDetails=new DetailModel({
        name,email,college,roll,course
        })
       await newDetails.save()
       res.status(200).send('your details saved')
    } catch (error) {
       res.send(`${error}`)
    }
    
})


serverRouter.delete('/details/:id',async(req,res)=>{
    try { 
        const id =req.params.id
        await DetailModel.findByIdAndDelete({_id:id})
        const details=await DetailModel.find()
        res.send(`${JSON.stringify({details})}`)
    } catch (error) {
        res.send(`${error}`)
    }
})

serverRouter.put('/details/:id',async(req,res)=>{
    try {
        const id =req.params.id
        const data=req.body
        await DetailModel.findByIdAndUpdate({_id:id},data)
        const details=await DetailModel.find()
        res.status(200).send(`${JSON.stringify({details})}`)
    } catch (error) {
        res.send(`${error}`)
    }
})






module.exports=serverRouter