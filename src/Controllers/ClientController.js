const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const ClientController = {
    lista: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        let categoriasEncontradas = db.categorias.findAll()
        let tamaniosEncontrados = db.tamanios.findAll()
        let seccionesEncontradas = db.secciones.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados, categoriasEncontradas, tamaniosEncontrados, seccionesEncontradas])
            .then(function ([orquideas, climas, categorias, tamanios, secciones ]){
                res.render('Client/listado', {orquideas, climas, categorias, tamanios, secciones})
            })
    },
    detalle : (req, res) => {
        db.Orquideas.findByPk(req.params.id, {
            include: [{ association: 'climas' }]
        })
            .then(function (orquideas) {
                res.render("Client/detail", { orquideas })
            })
    },
    registroForm : (req, res) => {
        res.render('Client/registro')
    },
    registro : (req, res) => {
        try {
            db.usuarios.create({
                nombre: req.body.nombre,
                documento: req.body.documento,
                tipoDeDocumento: req.body.tipoDeDocumento,
                email: req.body.email,
                contrasenia: req.body.contrasenia,
                contraseniaConf: req.body.contraseniaConf,
                pais: req.body.pais,
                ciudad: req.body.ciudad,
                direccion: req.body.direccion
            })
            res.redirect('/')
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = ClientController