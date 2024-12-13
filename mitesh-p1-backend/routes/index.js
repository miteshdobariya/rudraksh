var express = require('express');
var router = express.Router();
const user = require("../models/user")
const bcrypt = require('bcrypt');
const Joi = require('joi')
var nodemailer = require('nodemailer');
const validator = require('express-joi-validation').createValidator({})

const querySchema = Joi.object({
  username: Joi.string().required().messages({
    "any.required": "\"username\" is required",
    "string.base": "\"username\" must be a string"
  }),
  email: Joi.string().email().required().messages({
    "any.required": "\"email\" is required",
    "string.email": "\"email\" must be a valid email",
  }),
  password: Joi.string().min(2).max(7).required().messages({
    "any.required": "\"password\" is required",
    "string.min": "\"password\" length must be at least 2 characters long",
    "string.max": "\"password\" length must not exceed 7 characters",
  })
});





/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



// -----------------------login system-----------------------

router.post('/verify', async function (req, res, next) {
  try {
    var name = req.body.username;
    console.log(name);

    var data = await user.findOne({ "username": name });

    if (data != null) {
      var encrypt = await bcrypt.compare(req.body.password, data.password)
      if (encrypt != false) {
        res.status(200).json({
          status: "done",
          data,
        })
      }
      else {
        res.status(400).json({
          status: "password",
          message: "invalid password"
        })
      }
    }

    else {
      res.status(400).json({
        status: "username",
        message: "invalid username",

      })
    }


  }
  catch (err) {
    res.status(400).json({
      status: "err",
    })
  }
});




router.get('/getuser', async function (req, res, next) {
  try {
    const username = req.query.username; // Extract username from query params
    console.log("Fetching user:", username);

    const data = await user.findOne({ username }); // Find user by username
    if (data) {
      res.status(200).json({
        status: "done",
        data,
      });
    } else {
      res.status(404).json({
        status: "not_found",
        message: "User not found",
      });
    }
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
});


router.post('/add', validator.body(querySchema), async function (req, res, next) {
  try {
    console.log(req.body.username);
    var crypt = await bcrypt.hash(req.body.password, 10)
    console.log(req.body);
    var obj = {
      username: req.body.username,
      email: req.body.email,
      password: crypt,
      // mobile:req.body.mobile
    }
    await user.create(obj);

    
    res.status(200).json({
      status: "done"
    })
  }
  catch (err) {
    res.status(400).json({
      status: "err",
      errors: errorDetails,
    })
  }
});




// router.post('/forgot', async function (req, res, next) {
//   try {
//     data = await user.findOne({ "email": req.body.email });
//     console.log(data);

//     id = data._id;
//     var transporter = await nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'miteshdobariya2206@gmail.com',
//         pass: 'tfqb odaj cnpk bgbm '
//       }
//     });

//     otp = Math.floor((Math.random() * 1000000) + 1);

//     console.log(otp + "otp is");


//     if (data.email) {
//       var mailOptions = {
//         from: 'miteshdobariya2206@gmail.com',
//         to: data.email,
//         subject: 'Verification mail',
//         text: `${otp}`,
//       };
//     }

//     console.log(otp);
//     transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log('Email sent: ' + info.response);
//         console.log(otp);
//       }
//     });


//     res.status(200).json({
//       status: "done",
//       data
//     })
//   }
//   catch (err) {
//     console.log(err + "1234567");

//     res.status(400).json({
//       status: "err",
//       err
//     })
//   }
// });


// router.patch('/checkotp', async function (req, res, next) {
//   var msg;
//   try {
//     console.log(otp);
//     var userotp = req.body.otp;


//     if (req.body.password == req.body.newpassword) {

//       if (userotp == otp) {

//         var cryptpass = await bcrypt.hash(req.body.password, 10)
//         var obj = {
//           'password': cryptpass
//         }

        
//         await user.findByIdAndUpdate(id, obj);
//         console.log("**************************");
//         console.log(obj.password);
//         console.log(id);
//         console.log("**************************");

//         res.status(200).json({

//           status: "done",
//           msg

//         })
//       }
//       else {



//         res.status(400).json({
//           status: "err-otp",
//           msg:"enter valid otp"
          
//         })

//       }
//     }


//     else {
//       console.log("successsssssssssssssssssssssssss");

//       res.status(400).json({
//         status: "missmatch",
//         msg:"password doesn't match ",

//       })

//     }
//   }
//   catch (err) {
//     res.status(400).json({
//       status: "err",
//       msg:""
//     })
//   }
// });



let otpExpiry; // Declare a variable to store OTP expiry

router.post('/forgot', async function (req, res, next) {
  try {
    const data = await user.findOne({ "email": req.body.email });
    console.log(data);

    id = data._id;

    const transporter = await nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'miteshdobariya2206@gmail.com',
        pass: 'tfqb odaj cnpk bgbm',
      },
    });

    otp = Math.floor(Math.random() * 1000000 + 1); // Generate OTP
    otpExpiry = Date.now() + 10000; // Set OTP expiry time (current time + 1 minute)

    console.log(otp + " otp is");

    if (data.email) {
      var mailOptions = {
        from: 'miteshdobariya2206@gmail.com',
        to: data.email,
        subject: 'Verification mail',
        text: `Your OTP is ${otp}. It will expire in 1 minute.`,
      };
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        console.log(otp);
      }
    });

    res.status(200).json({
      status: "done",
      message: "OTP sent successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      status: "err",
      message: "Unable to send OTP",
    });
  }
});


router.patch('/checkotp', async function (req, res, next) {
  try {
    const userOtp = req.body.otp;

    // Check if OTP is expired
    if (Date.now() > otpExpiry) {
      return res.status(400).json({
        status: "expired",
        message: "OTP has expired. Please request a new one.",
      });
    }

    // Check if OTP matches
    if (userOtp == otp) {
      if (req.body.password === req.body.newpassword) {
        const cryptpass = await bcrypt.hash(req.body.password, 10);
        const obj = { password: cryptpass };

        await user.findByIdAndUpdate(id, obj);

        res.status(200).json({
          status: "done",
          message: "Password updated successfully",
        });
      } else {
        res.status(400).json({
          status: "mismatch",
          message: "Passwords do not match",
        });
      }
    } else {
      res.status(400).json({
        status: "err-otp",
        message: "Invalid OTP. Please try again.",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "err",
      message: "An error occurred",
    });
  }
});



module.exports = router;









