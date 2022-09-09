var express = require('express');
var router = express.Router();
const HomeController = require('../Controllers/HomeController')

/* GET home page. */
router.get('/', HomeController.home);

module.exports = router;
