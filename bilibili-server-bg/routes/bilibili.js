const express = require('express');
const router = express.Router();
const service = require('./../services/bilibiliService');

//The URL: /bilibili/blvService
router.post('/blvService', service.blvService);

module.exports = router;