const express = require ('express');
const { register, login } = require('../controllers/userController');
const { isAuth } = require('../middleware/authen');
const { registerValidation, validation, loginValidation } = require('../middleware/validation');
const userRouter = express.Router();

//register
//methode post
userRouter.post('/register',registerValidation,validation,register)
//login
//methode post
userRouter.post('/login',loginValidation,validation,login)
//get
userRouter.get('/current',isAuth,(req,res,next)=>{
    res.send({user:req.user})
})

module.exports = userRouter;