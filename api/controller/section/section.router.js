const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createSections,getAllSections,getSectionsById,updateSectionsById,deleteSectionsById}= require('./section.controller')


const upload = multer()

router.post('/section',upload.none(),createSections);

router.get('/section',getAllSections);

router.get('/section/:id',getSectionsById);

router.patch('/section/:id',upload.none(),updateSectionsById);

router.delete('/section/:id',deleteSectionsById);

module.exports = router;