const reviewModel = require('../../module/review/review.model')
module.exports = ({  
    createReview: (req, res) => {
     new reviewModel({
        user_id: req.body.user_id,
        product_id:req.body.product_id,
        reviewImages:req.body.reviewImages,
        rating:req.body.rating,
        title:req.body.title,
        desc:req.body.desc,
        like:req.body.like,
        dislike:req.body.dislike,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllReview: (req, res) => {
    reviewModel.find().exec((err, data) => {
        if (err)return res(err) ;
        return res(null,data)
    })
},
getReviewById: (req, res) => {
    reviewModel.findById(req.params.id).exec((err, data) => {
        if (err)return res(err);
        return res(null,data)
    })
},
updateReviewById: (req, res) => {
    reviewModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
},
deleteReviewById: (req, res) => {
    reviewModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
},
deleteReview: (req, res) => {
    reviewModel.deleteMany().exec((err, data) => {
        if (err) return res(err) ;
        return res(null,data)
    })
}
})