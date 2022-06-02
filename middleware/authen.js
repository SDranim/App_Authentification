const jwt = require('jsonwebtoken');
const users = require('../models/users');

exports.isAuth=async(req,res,next)=>{
    const token= req.header("authorization")
    try {
        if(!token){
            return res.send("you are not authorized")
        }
        const decoded = jwt.verify(token,process.env.secretOrKey);
        const user = await users.findById(decoded.id)
        req.user=user;
        next();
    } catch (error) {
        console.log('server error')
        
    }
}