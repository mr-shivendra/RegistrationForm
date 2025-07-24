const mongoose =require('mongoose')


const detailSchema=mongoose.Schema({
    name:{type:String,required:true},
    college:{type:String,required:true},
    course:{type:String,required:true},
    roll:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true}
},{
    versionKey:false
}
)  // here we are making schema for this details code 

const  DetailModel=mongoose.model('studentDetail',detailSchema)

module.exports=DetailModel