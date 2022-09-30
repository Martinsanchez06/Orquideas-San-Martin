var express = require('express');
var router = express.Router();
const ClientController = require('../Controllers/ClientController')

// ------ OBTIENE VISTAS ------ 
router.get('/listado', ClientController.lista);

router.get('/detalle/:id', ClientController.detalle)

router.get("/registro", ClientController.registroForm)

router.get("/login", ClientController.loginForm)

router.get("/perfil", ClientController.perfil)

router.get("/resultado", function(req, res){
res.send('ok')
});


// ------ ENVIA INFORMACION ------

router.post("/registro", ClientController.registro)

router.post("/login", ClientController.login)



module.exports = router;
