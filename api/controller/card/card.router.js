const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createCards,getAllCards,getCardsById,getCardsBySection,updateCardsById,deleteCardsById}= require('./card.controller')

const storage = multer.diskStorage({
    destination: './upload/cardImg',
    filename: (req, file, cb) => {
        return cb(null, file.fieldname + Date.now() + file.originalname)
    }
})

const upload = multer({
    storage: storage
}).single('image')

router.post('/card',upload,createCards);

router.get('/card',getAllCards);

router.get('/card/section/:id',getCardsBySection);

router.get('/card/:id',getCardsById);

router.patch('/card/:id',upload,updateCardsById);

router.delete('/card/:id',deleteCardsById);

module.exports = router;