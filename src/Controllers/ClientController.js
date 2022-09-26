const fs = require('fs')
const bcryptjs = require('bcryptjs');
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
                ...req.body,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                contraseniaConf: bcryptjs.hashSync(req.body.contraseniaConf, 10),
            })
            res.redirect('/')
        } catch (error) {
            res.send('error')
        }
    }
}

module.exports = ClientController