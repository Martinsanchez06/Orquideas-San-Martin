const fs = require('fs')
const path = require('path')
const db = require('../database/models')

const OrquideasController = {
    formCreate: function (req, res) {
        res.render('Admin/create')
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
    },
    formUpdate: function (req, res) {
        let orquideasEncontradas = db.Orquideas.findByPk(req.params.id)
        let climasEncontrados = db.climas.findAll()
        Promise.all([orquideasEncontradas, climasEncontrados])
            .then(function ([orquideas, climas]) {
                res.render('Admin/edit', { orquideas, climas })
            })
    },
    update: (req, res) => {
        try {
            db.Orquideas.update({
                nombre: req.body.nombre,
                clima_id: req.body.clima,
                precio: req.body.precio,
                descripcion: req.body.descripcion,
                categoria_id: req.body.categoria,
                tamanio_id: req.body.tamanio,
                disponibilidad: req.body.disponibilidad,
                flor: req.body.flor,
                imagen1: req.files[0] ? req.files[0].filename : req.body.oldImagen1,
                imagen2: req.files[1] ? req.files[1].filename : req.body.oldImagen2,
                imagen3: req.files[2] ? req.files[2].filename : req.body.oldImagen3,
            }, {
                where: {
                    id: req.params.id
                }
            })
            let orquideasEncontradas = db.Orquideas.findAll()
            let climasEncontrados = db.climas.findAll()
            Promise.all([orquideasEncontradas,climasEncontrados])
                .then(function ([orquideas, climas]){
                   return res.render('Client/listado', {orquideas, climas})
                })      
        } catch (error) {
            res.send('error', error)
        }
    },

}

module.exports = OrquideasController