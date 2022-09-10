const fs = require('fs')
const path = require('path')
const db = require('../database/models')

const OrquideasController = {
    formCreate: function (req, res){
        res.render('orquideas/formularioDeCreacion')
    },
    guardar: function (req, res) {
        res.send('o')
        console.log(req);
        console.log(req.body);
    }

}

module.exports = OrquideasController