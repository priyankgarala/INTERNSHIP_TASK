const express = require('express');
const router = express.Router();
const { getTopSellingPackages } = require('../controllers/packageController');

router.get('/top-selling', getTopSellingPackages);

module.exports = router;
    