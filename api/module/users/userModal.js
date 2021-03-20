const mongoose =require('../mainDB') 
const userschema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'Name is required']
    },
    phone:{
        type:String,
        min:10,
        description: "Enter valid mobile number"
    },
    email:{
        type:String,
        pattern : "@mongodb\.com$",
        required:true,
        description: "Must be a valid email",
    },
    password:{
        type:String,
        required:true,
        // regex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$",
        description: "It must contains at least 8 characters,one digit,one upper case alphabet,lower case alphabet,one special character which includes !@#$%&*()-+=^.,It doesn’t contain any white space"
    },
      userType:{
          type:Number,
          maximum:1,
          default:0
      },
      status:{
          type:Number,
          maximum:1,
          default:0
      },
      date:{
          type:Date
      }
})
const usermodel = mongoose.model('user', userschema);
module.exports = usermodel;
