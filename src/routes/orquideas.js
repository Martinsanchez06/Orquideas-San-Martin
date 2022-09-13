var express = require('express');
var router = express.Router();
const OrquideasController = require('../Controllers/OrquideasController')
const multer = require("multer");
// const { body } = require("express-validator")
// const path = require("path")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/images/orquideasImages')
    },
    filename: (req, file, cb) => {
        let filename = file.originalname 
        cb(null, filename)
    }
})

const imagenSubida = multer({ storage })


// ----- OBTIENE LAS VISTAS -----

router.get('/crear', OrquideasController.formCreate);

// ----- CREA UN PRODUCTO -----

router.post('/crear', imagenSubida.array('imagen', 3) , OrquideasController.create)


module.exports = router;
