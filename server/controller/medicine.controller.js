

const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
// const User = require('../models/User');
const Medicine=require('../models/Medicine')
// Load input validation
// const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');

exports.create= (req, res) => {

  // console.log(req.body);
  // const { errors, isValid } = validateRegisterInput(req.body);
  // if (!isValid) {
  //         return res.status(400).json(errors);
  //       }
      
  Medicine.findOne({medicine_name:req.body.medicine_name }).then(medicine => {
          if (medicine) {
            return res.status(400).json({  medicine_name:'medicine_name already exists' });
          } else {
            const newMedicine = new Medicine({
              medicine_name: req.body.medicine_name,
                              quntiy: req.body.quntiy,
                              medicine_time: req.body.medicine_time,
                              medicine_details:req.body.medicine_details,
                              after_before_eating: req.body.after_before_eating,
                              drug:req.body.drug,
                              price:req.body.price,
                              avabile_at:req.body.avabile_at
                              // date_of:req.body.date_of,
                              // address: req.body.address,
                });
         
             
             newMedicine
                       .save()
                            .then(medicine => res.json(medicine))
                            .catch(err => console.log(err));
                        
                            }
                    
                  });
                  }



  
  exports.findAll= (req, res) => {
    Medicine.find().then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
  }
  exports.findById= (req, res) => {
    console.log(req.params);
    medicine_name = req.params.medicine_name;
    Medicine.findOne({medicine_name:req.body.medicine_name }).then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
}

exports.delete = (req, res) =>{
  medicine_name = req.params.medicine_name;
    Medicine.findOneAndRemove(medicine_name).then(()=>{
        res.json({
            success: true,
            message : "delete successfully"
        })
    }).catch(err=>{
        res.json({
            message: "something went to wrong! "+err
        })
    })

}

exports.update= (req, res) => {
    console.log(req.params);
    medicine_name = req.params.medicine_name;
    data=req.body;
    // data = {
    //    name:req.body.name,
    //     email: req.body.email
    // }
   
    Medicine.findOneAndUpdate(medicine_name,{
      ...data},{new:true}).then(()=>{

        res.json({
            success: true,
            message : "update successfully"
        })
    })    
}



