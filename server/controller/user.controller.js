
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const passport = require('passport');
const User = require('../models/User');
const account_cre=require('./mail/change_pas');
// Load input validation
// const validateRegisterInput = require('../validation/register');
// const validateLoginInput = require('../validation/login');

  
exports.create= (req, res) => {

  // console.log(req.body);
  // const { errors, isValid } = validateRegisterInput(req.body);
  // if (!isValid) {
  //         return res.status(400).json(errors);
  //       }
      
        User.findOne({ email: req.body.email }).then(user => {
          if (user) {
            return res.status(400).json({ email: 'email already exists' });
          } else {
            
            const newUser = new User({
              name: req.body.name,
              age: req.body.age,
              password: req.body.password,
              email:req.body.email,
              last: req.body.last,
              date_of:req.body.date_of,
              address: req.body.address,
            //   img: {
            //     data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            //     contentType: 'image/png'
            // },
            // filename:req.file.filename,
              otp:'0',
              status:'0'
            });
            
             // Hash password before saving in database
             bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                // account_cre(newUser.email);
                newUser
                  .save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              });
            });
          }
        });
        }



  exports.findAll= (req, res) => {
    User.find().then(data=>{
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
    id = req.params.id;
    User.findById(id).then(data=>{
        res.json({
            data:data});
    }).catch(err=> {
        res.json({
            message:"Something went to wrong!" +err
        });
        })
}

exports.delete = (req, res) =>{
    id = req.params.id;
    User.findByIdAndRemove(id).then(()=>{
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
    id = req.params.id;
    data=req.body;
    // data = {
    //    name:req.body.name,
    //     email: req.body.email
    // }
   
    User.findByIdAndUpdate(id,{
      ...data},{new:true}).then(()=>{

        res.json({
            success: true,
            message : "update successfully"
        })
    })    
}




// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
// router.post('/login', (req, res) => {
//   // Form validation
exports.login=(req,res)=>{
  console.log(req.param);
  // const { errors, isValid } = validateLoginInput(req.body);

  // Check validation
  //   if (!isValid) {
  //   return res.status(400).json(errors);
  // }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: 'Email not found' });
    }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name
        };

        // Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: 'Password incorrect' });
      }
    });
  });
}

