var express = require('express');
var router = express.Router();
const OrquideasController = require('../Controllers/OrquideasController')

// ----- OBTIENE LAS VISTAS -----

router.get('/crear', OrquideasController.formCreate);

// ----- CREA UN PRODUCTO -----

router.post('/crear', function (req, res) {
    res.send('o')
    console.log(req);
    console.log(req.body);}
    )


module.exports = router;
