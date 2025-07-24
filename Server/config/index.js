const mongoose=require('mongoose')
require('dotenv').config()

const url=process.env.URL//here the path of batabase should be there where you want to store data

const connection =mongoose.connect(url) //here we are connecting our database to the server using mongoose 

module.exports=connection