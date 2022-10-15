var express = require('express');
var router = express.Router();
const AdminController = require('../Controllers/AdminController')
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

router.get('/crear', AdminController.formCreate);

router.get('/opcionesAdmin', AdminController.opcionesAdmin);

router.get('/editar/:id', AdminController.formUpdate)

router.get('/detalleAdmin/:id', AdminController.detalleAdmin)

// ----- CREA UN PRODUCTO -----

router.post('/crear', imagenSubida.array('imagen', 3) , AdminController.create)

router.post('/editar/:id' , imagenSubida.array('imagen', 3), AdminController.update)

// ------ ELIMINA ------

router.post('/eliminar/:id', AdminController.delete)


module.exports = router;
