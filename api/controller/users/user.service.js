const userModel = require('../../module/users/userModal')
module.exports = ({
    createUser: (req, res) => {
     new userModel({
        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        password:req.body.password,
        userType:req.body.userType,
        date:new Date(),
        }).save((err, data) => {
        if (err){
            return res(err)
            };
        return res(null,data)
    })
},
loginUser: (req, res) => {
    userModel.find({phone:req.body.phone}).exec((err, data) => {
        if (err) {
            return res(err);
        }
        return res(null, data[0])
    })
},
getAllUser: (req, res) => {
    userModel.find().exec((err, data) => {
        if (err){
            return res(err);
        };
        return res(null,data)
    })
},
getUserById: (req, res) => {
    userModel.find({_id:req.params.id}).exec((err, data) => {
        if (err){
            return res(err);
        };;
        return res(null,data)
    })
}
})