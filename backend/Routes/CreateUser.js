const express = require('express')
const router = express.Router()
const User = require("../models/User")
const { body, validationResult } = require('express-validator');



router.post("/createuser",
[body('email','Not a valid Email').isEmail(),
body('name','Name should have more than 5 characters').isLength({min:5}),
body('password','Password should have more than 5 characters').isLength({min:5})],
 async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors : errors.array()});
    }

    try{
        await User.create({
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location,
            
        })
        console.log("User created");
        res.json({success:true});
    }catch (error){
        console.log(error)
        res.json({success:false});
    }
})





router.post("/loginuser",
[body('email','Not a valid Email').isEmail()],
 async(req,res)=>{

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({error : errors.array()});
    }

    try{
        let email = req.body.email
        let userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({error: "Email not registered, Login with Valid credentials"})
        }
        
        if(! (req.body.password === userData.password)){
            
            return res.status(400).json({error: "Wrong password, Enter correct password"})
        }

        return res.json({success: true})
        console.log("User created");
        res.json({success:true});
    }catch (error){
        console.log(error)
        res.json({success:false});
    }
})



module.exports = router;