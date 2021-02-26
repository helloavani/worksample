const express = require('express');
const router = express.Router();
const appController = require('./controller');



router.post('/userData',appController.postData);
router.get('/get-data',appController.getData);

module.exports = router;