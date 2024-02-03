const express=require('express');
const router=express.Router();
const Admin=require('../models/admin');
const { Db } = require('mongodb');

router.post('/auth',async (req,res,next)=>{

    const {phone,password}=req.body;
    
    try{
    let user=await Admin.findOne({phone:phone});

    if(user){
        if(user.password==password){
        res.json({
            success:true,
            msg:"logged successfully",
            username:user.username,
            college:user.college,
            gender:user.gender,
            hostel:user.hostel,
            photo:user.photo,
            photoid:user.photoid
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