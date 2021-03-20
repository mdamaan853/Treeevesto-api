const cardModel = require('../../module/card/cardModel')
module.exports = ({
    createCard: (req, res) => {
     new cardModel({
        sectionId: req.body.sectionId,
        image: req.body.image,
        link:req.body.link,
        date:new Date(),
        }).save((err, data) => {
        if (err){
        return res(err) 
        };
        return res(null,data)
    })
},
getAllCard: (req, res) => {
    cardModel.find().exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
getCardById: (req, res) => {
    cardModel.findById(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
updateCardById: (req, res) => {
    cardModel.updateOne({_id:req.params.id},{$set:req.body}).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
},
deleteCardById: (req, res) => {
    cardModel.findByIdAndRemove(req.params.id).exec((err, data) => {
        if (err) throw err;
        return res(null,data)
    })
}
})