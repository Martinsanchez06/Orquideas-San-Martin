var express = require('express');
var router = express.Router();
const ClientController = require('../Controllers/ClientController')
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

// ------ OBTIENE VISTAS ------ 
router.get('/listado', ClientController.lista);

router.get('/detalle/:id', ClientController.detalle)

router.get("/registro", guestMiddleware, ClientController.registroForm)

router.get("/login",  guestMiddleware, ClientController.loginForm)

router.get("/perfil",authMiddleware , ClientController.perfil)

router.get("/logout",authMiddleware , ClientController.logout)

router.get("/resultado",ClientController.search);


// ------ ENVIA INFORMACION ------

router.post("/registro", ClientController.registro)

router.post("/login", ClientController.login)



module.exports = router;
