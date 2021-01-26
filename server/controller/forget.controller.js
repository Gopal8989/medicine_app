
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');
const mailerFun = require("./mail/otp");
const foremail=require('./mail/change_pas');
// var app = express();
// const bodyparser = require("body-parser");
// app.use(bodyparser.json());

var otpGenerator = require("otp-generator");


// Load input validation
// const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');

exports.verify= (req, res) => {
  data=req.body;
  User.findOne({ email:req.body.email }).then(user => {
    if (!user) {
      return res.status(400).json({ email: 'email not exists' });
    } else {
     
      email = req.params.email;
                  
     

      User.findOneAndUpdate(email,{
        status:'1'},{new:true}).then(()=>{
  
          res.json({
              success: true,
              message : "Email exists"
          })
      })    
            }
       
          })

        }
    

        exports.forgate = (req, res) => {
          
            var emp = req.body;
            var email=emp.email;
            emp.otp = otpGenerator.generate(6, {
              digits: true,
              alphabets: false,
              upperCase: false,
              specialChars: false
            });
            otp=emp.otp; 
            console.log(otp)
            User.findOne({ email:req.body.email }).then(user => {
                if (user) {
                  // _id = req.params._id;
                  email = req.params.email;
                  data=req.body;
          data=req.body;
          console.log(data)
          mailerFun(emp.email);
          // data = {
          //    name:req.body.name,
          //     email: req.body.email
          // }
         
          User.findOneAndUpdate(email,{
            status: '1',otp},{new:true}).then(()=>{
      
              res.json({
                msg:'1',
                  success: true,
                  message : "Email exists"
              })
          })    
                }else {
                     return res.status(400).json({ email: 'email not exists' });
               
              
                }
              });
              
            }
    


  exports.otp = (req, res) => {
    const emp = req.body;
    console.log(emp);
    User.findOne({ email:req.body.email,otp:req.body.otp}).then(user => {
        if (user) {
          email = req.params.email;
  data=req.body;
  console.log(data)
  // data = {
  //    name:req.body.name,
  //     email: req.body.email
  // }
 
  User.findOneAndUpdate(email,{
    otp:'1'},{new:true}).then(()=>{

      res.json({
        msg:'1',
          success: true,
          message : "otp same"
      })
  })    
        }else {
             return res.status(400).json({ otp: 'otp not same' });
       
      
        }
      });
      
    }

    exports.changepass = (req, res) => {
        var emp = req.body;
        // password=req.body.password;
        email = req.body.email;
        var password = emp.password;
        console.log(emp);
        if (emp.password == "1") {
          res.json({
            msg: 0
          });
        } else {
        bcrypt.genSalt(10, function(err, salt) {
            if (err) console.log("success");
            bcrypt.hash(password, salt, function(err, hash) {
              if (err) console.log("sucss");
              const passwordhash = hash;
              console.log(passwordhash);

              User.findOneAndUpdate(email,{
                passwordhash},{new:true}).then(()=>{
                  foremail(emp.email);
                  res.json({
                    msg:'1',
      
                      success: true,
                      message : "password change"
                  })
              })    
            
               })   })  }  
              }