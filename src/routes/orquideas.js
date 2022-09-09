var express = require('express');
var router = express.Router();
const OrquideasController = require('../Controllers/OrquideasController')
/* GET home page. */
router.get('/crear', OrquideasController.create);

module.exports = router;
