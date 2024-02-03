const express=require('express');
const router=express.Router();
const Guard=require('../models/Guard');
const { Db } = require('mongodb');

router.post('/auth',async (req,res,next)=>{

    const {phone,password}=req.body;
    
    try{
    let user=await Guard.findOne({phone:phone});

    if(user){
        if(user.password==password){
        res.json({
            success:true,
            msg:"logged successfully",
            username:user.username,
            college:user.college,
            gender:user.gender,
            photo:user.photo
        });
    }
    else{
        res.json({
            success:false,
            msg:"wrong password"
        });
    }
    }else{
    res.json({
        success:false,
        msg:"user doesn't exists"
    })
}
    }
    catch(err){
        res.json({
            success:false,
            msg:"user doesn't exists"
        })
    }
})

module.exports=router;