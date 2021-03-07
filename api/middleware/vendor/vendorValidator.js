const { check, validationResult } = require('express-validator');

exports.venderValidation=
        [check('name', 'name Name should not be  empty').not().isEmpty().trim(),
        check('phone', 'Enter valid mobile number').isLength({ min: 10, max: 10 }),
        check('email', 'enter valid emailID').isEmail().normalizeEmail(),
        check('password', 'password should contain minimum 8 digit').isLength({ min: 8}),
        check('cpassword', 'cpassword should not be  empty').not().isEmpty(),
        check('pickupAddress', 'cpassword should not be  empty').not().isEmpty(),
        check('pincode', 'cpassword should not be  empty').not().isEmpty().isLength({min:6,max:6}),
        check('completeAddress', 'cpassword should not be  empty').not().isEmpty()        
    ]
    exports.venderValidationResult=(req,res,next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.mapped())
            return res.status(404).json({ errors: errors.mapped() });
        }
        next();
    }
