const bannerModel = require('../../module/banner/bannerModal')
module.exports = ({
    createBanner: (req, res) => {
     new bannerModel({
        image: req.body.image,
        link: req.body.link,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllBanner: (req, res) => {
    bannerModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getBannerById: (req, res) => {
    bannerModel.findById(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
updateBannerById: (req, res) => {
    bannerModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteBannerById: (req, res) => {
    bannerModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}

})