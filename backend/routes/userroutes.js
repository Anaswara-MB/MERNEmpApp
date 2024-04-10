const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const users = require('../model/user');

router.use(express.json())
//signup route
router.post('/',async(req, res)=>{
    try {
      const data = req.body;
      let newUser = await users(data).save();
      let payload={user: newUser.username,pwt: newUser.password};
      let token=jwt.sign(payload,'employeeapp');
      res.status(200).send({message:"User created successfully", token:token});
      res.status(200).send({message:"User Added"});
    } catch (error) {
      console.log(error);
    }
  
  })