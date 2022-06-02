const {body,validationResult}=require ('express-validator');

exports.registerValidation=[
    body("name",'please enter your personal name'),
    body("email",'please enter a correct email').isEmail(),
    body("password",'password should be at least 8 caracters').isLength({min:8})
];

exports.loginValidation=[
    body("email",'please enter a correct email').isEmail(),
    body("password",'password should be at least 8 caracters').isLength({min:8})
]

exports.validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
}