const express = require('express')
const router = express.Router()
const multer = require('multer')

const {createSizeCharts,getAllSizeCharts,getSizeChartByIds,getSizeChartProducts,updateSizeCharts,deleteSizeCharts} = require('./sizeChart.controller')

const upload = multer().none()

router.post('/sizechart', upload,createSizeCharts);

router.get('/sizechart',getAllSizeCharts);

router.get('/sizechart/:id',getSizeChartByIds);

router.delete('/sizechart/:id',deleteSizeCharts);

router.patch('/sizechart/:id',upload,updateSizeCharts);

module.exports = router; 
