const mongoose=require('mongoose');

const subSectionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    timeDuration:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    video:{
        type:String,
    }   

});


module.exports=mongoose.model("SubSection",subSectionSchema);