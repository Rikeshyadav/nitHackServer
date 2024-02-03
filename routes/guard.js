const express=require('express');
const router=express.Router();
const User=require('../models/Guard');
const { Db } = require('mongodb');


router.post('/register',async (req,res,next)=>{

    const {username,college,password,phone,gender,photo}=req.body;
    try{
    let user_exist=await User.findOne({phone:phone});
    if(user_exist){
        res.json({
            success:false,
            msg:"User already exists"
        });
    }
    else{
    let user=new User();
    user.username=username;
    user.college=college;
    user.password=password;
    user.phone=phone;
    user.gender=gender;
    user.photo=photo;
    await user.save();
    res.json({
        success:true,
        msg:"user registered"
    })
    }
}
    catch(err){
        console.log(err);
    }
})

module.exports=router;