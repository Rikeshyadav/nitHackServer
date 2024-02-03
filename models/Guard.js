const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    
username:{
    type:String
},
password:{
    type:String,
    required:true
},
phone:{
type:String,
required:true
},
gender:{
type:String
},
college:{
    type:String
},
photo:{
    type:String
}
});

module.exports=mongoose.model('Guard',userSchema);