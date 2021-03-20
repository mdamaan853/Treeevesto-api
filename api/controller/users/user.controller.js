const {createUser, getAllUser,getUserById,loginUser} = require('./user.service')
const jwt = require('jsonwebtoken')
const { hashSync, compareSync } = require('bcrypt')
module.exports = ({
    createUsers:(req, res) => {
        if (req.body.password == req.body.cpassword) {
            req.body.password = hashSync(req.body.password, 10)
            createUser(req, (err, data) => {
                if (err) {
                    res.json({
                        success: 0,
                        msg: "error while inserting " + err
                    })
                } else {
                    res.json({
                        success: 1,
                        msg: "successfully regestred",
                        result:data
                    })
                }
            })
        } else {
            res.json({
                success: 0,
                msg: "password did't match"
            })
        }
    },

loginUsers:(req,res)=>{
loginUser(req,(err,data)=>{
    if (err) {
        res.json({
            success: 0,
            msg: "error while login " + err
        })
    }
    if (!data) {
        res.json({
            success: 0,
            msg: "you have not regestred yet"
        })
    } else {
        var result = compareSync(req.body.password, data.password)
        if (result) {
            var token = jwt.sign({
                email: data.email,
                mobile: data.mobile
            }, 'mySecretKey', {
                expiresIn: '24h'
            })
            res.json({
                success: 1,
                msg: "you are loggedin",
                token: token,
                email:data.email,
                userId:data._id,
                phone:data.phone
            })
        } else {
            res.json({
                success: 0,
                msg: 'invalid credentials'
            })
        }
    }
})
},
getAllUsers: (req, res) => {
    getAllUser(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "error while fetching " + err
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    },
    getUsersById: (req, res) => {
        getUserById(req, (err, data) => {
            if (err) {
                res.json({
                    success: 0,
                    msg: "Error while fetching by id " + err
                })
            }
            if (!data) {
                res.json({
                    success: 0,
                    msg: "no records found"
                })
            } else {
                res.json({
                    success: 1,
                    result: data
                })
            }
        })
    }
})