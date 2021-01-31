

const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
// const User = require('../models/User');
const Medicine_name=require('../models/Medicine_name')
// Load input validation
// const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');
exports.create= (req, res) => {console.log(req.body);
    const newMedicine_name = new Medicine_name({
    illness: req.body.illness,
    medicine_name: req.body.medicine_name
    });
    newMedicine_name.save()
    .then(Medicine_name => res.json(Medicine_name))
    .catch(err => console.log(err));
    }
// exports.create= (req, res) => {

//   // console.log(req.body);
//   // const { errors, isValid } = validateRegisterInput(req.body);
//   // if (!isValid) {
//   //         return res.status(400).json(errors);
//   //       }
      
//   Medicine_name.findOne({illness:req.body.illness }).then(medicine_names => {
//           if (medicine_names) {
//             return res.status(400).json({  illness:'illness already exists' });
//           } else {
//             const newMedicine_name = new Medicine_name({
//               medicine_name: req.body.medicine_name,
//                               illness: req.body.illness,
//                             //   medicine_time: req.body.medicine_time,
//                             //   medicine_details:req.body.medicine_details, 
//                             //   after_before_eating: req.body.after_before_eating,
//                             //   drug:req.body.drug,
//                             //   price:req.body.price,
//                             //   avabile_at:req.body.avabile_at
//                               // date_of:req.body.date_of,
//                               // address: req.body.address,
//                 });
         
             
//              newMedicine_name
//                        .save()
//                             .then(medicine_names => res.json(medicine_names))
//                             .catch(err => console.log(err));
                        
//                             }
                    
//                   });
//                   }



  
  exports.findAll= (req, res) => {
    Medicine_name.find().then(data=>{
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
    illness = req.params.illness;
    Medicine_name.find({illness:req.body.illness }).then(data=>{
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
    Medicine_name.findOneAndRemove(medicine_name).then(()=>{
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
    illness = req.params.illness;
    data=req.body;
    // data = {
    //    name:req.body.name,
    //     email: req.body.email
    // }
   
    Medicine_name.findOneAndUpdate(illness,{
      ...data},{new:true}).then(()=>{

        res.json({
            success: true,
            message : "update successfully"
        })
    })    
}



