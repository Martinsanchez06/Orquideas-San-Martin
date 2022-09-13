const fs = require('fs')
const path = require('path')
const db = require('../database/models')

const OrquideasController = {
    formCreate: function (req, res){
        res.render('orquideas/formularioDeCreacion')
    },
    create: function (req, res) {
        try {
            db.Orquideas.create({
                nombre: req.body.nombre,
                clima_id: req.body.clima,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                categoria_id: req.body.categoria,
                tamanio_id: req.body.tamanio,
                disponibilidad: req.body.disponibilidad,
                flor: req.body.flor,
                imagen1: req.files[0].filename,
                imagen2: req.files[1].filename,
                imagen3: req.files[2].filename,
            }) 
            res.send('archivo subido')
        } catch (error) {
            res.send('error', error)
        }
    }

}

module.exports = OrquideasController