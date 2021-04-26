const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createTables,getAllTables,deleteTablesById,updateTablesById, getTablesById} = require('./specTable.controller')

const upload = multer().none()

router.post('/specificationTable', upload,createTables);

router.get('/specificationTable',getAllTables);

router.get('/specificationTable/:id',getTablesById);

router.delete('/specificationTable/:id',deleteTablesById);

router.patch('/specificationTable/:id',upload,updateTablesById);

module.exports = router; 
