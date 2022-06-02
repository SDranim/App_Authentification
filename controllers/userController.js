//register
//methode post
const bcrypt = require ('bcrypt')
const users = require("../models/users");
const jwt = require ("jsonwebtoken")

//api : / register
exports.register=async(req,res)=>{
    const {email,password} = req.body;
try {
    const found = await users.findOne({email})
    if (found){
        return res.status(400).send({msg:'user already exist'})
    }
    const newUser = new users(req.body)
    //bcrypt
    const salt = 10;
    const hashPassword = bcrypt.hashSync(password,salt);
    newUser.password = hashPassword;
    //jwt
    const payload = {id:newUser._id}
    const token = jwt.sign(payload,process.env.secretOrKey);
    await newUser.save();
    res.status(200).send({msg:'registered with sucess', newUser, token})
} catch (error) {
    res.status(500).send('could not register')
}}

//login 
exports.login=async(req,res)=>{
    const {email,password} = req.body;
    try {
    const foundUser = await users.findOne({email})
    if (!foundUser)
    return res.status(400).send('bad credentials')
    const  match = await bcrypt.compare(password,foundUser.password) 
    if (!match){
        return res.status(400).send('bad credentials')
    }
    const payload = {id:foundUser._id}
    const token = jwt.sign(payload,process.env.secretOrKey);
    res.status(200).send({msg:'login with sucess',foundUser,token})
    } catch (error) {
      res.status(500).send('could not login')
    }
}
