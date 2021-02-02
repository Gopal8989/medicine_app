

const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
// const User = require('../models/User');
const Appointment=require('../models/Appointment')
// Load input validation
// const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');

// exports.create= (req, res) => {

//   // console.log(req.body);
//   // const { errors, isValid } = validateRegisterInput(req.body);
//   // if (!isValid) {
//   //         return res.status(400).json(errors);
//   //       }
      
//   Medicine.findOne({medicine_name:req.body.medicine_name }).then(medicine => {
//           if (medicine) {
//             return res.status(400).json({  medicine_name:'medicine_name already exists' });
//           } else {
//             const newMedicine = new Medicine({
//               medicine_name: req.body.medicine_name,
//                               quntiy: req.body.quntiy,
//                               medicine_time: req.body.medicine_time,
//                               medicine_details:req.body.medicine_details,
//                               after_before_eating: req.body.after_before_eating,
//                               drug:req.body.drug,
//                               price:req.body.price,
//                               avabile_at:req.body.avabile_at
//                               // date_of:req.body.date_of,
//                               // address: req.body.address,
//                 });
         
             
//              newMedicine
//                        .save()
//                             .then(medicine => res.json(medicine))
//                             .catch(err => console.log(err));
                        
//                             }
                    
//                   });
//                   }

exports.create= (req, res) => {console.log(req.body);
    const newAppointment = new Appointment({
       
                                      illness: req.body.illness,
                                      datee: req.body.datee,
                                      city:req.body.city,
                                      hospital: req.body.hospital,
                                      m_number:req.body.m_number,
                                      token_nu:req.body.token_nu,
                                      time:req.body.time
                                    //   price:req.body.price,
                                    //   avabile_at:req.body.avabile_at
                                      // date_of:req.body.date_of,
                                      // address: req.body.address,
        
    });
    newAppointment.save()
    .then(Appointment => res.json(Appointment))
    .catch(err => console.log(err));
    }

  
  exports.findAll= (req, res) => {
    Appointment.find().then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
  }
//   exports.findById= (req, res) => {
//     console.log(req.params);
//     medicine_name = req.params.medicine_name;
//     Medicine.find({medicine_name:req.body.medicine_name }).then(data=>{
//         res.json({
//             data:data});
//     }).catch(err=> {
//         res.json({
//             message:"Something went to wrong!" +err
//         });
//         })
// }
exports.findById= (req, res) => {
    console.log(req.params);
    m_number = req.params.m_number;
    Appointment.find({m_number:req.body.m_number }).then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
}

exports.delete = (req, res) =>{
  m_number = req.params.m_number;
  Appointment.findOneAndRemove(m_number).then(()=>{
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
    m_number = req.params.m_number;
    data=req.body;
    // data = {
    //    name:req.body.name,
    //     email: req.body.email
    // }
   
    Appointment.findOneAndUpdate(m_number,{
      ...data},{new:true}).then(()=>{

        res.json({
            success: true,
            message : "update successfully"
        })
    })    
}



