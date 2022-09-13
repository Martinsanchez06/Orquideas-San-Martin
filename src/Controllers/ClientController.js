const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const ClientController = {
    lista: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados])
            .then(function ([orquideas, climas]){
                res.render('Client/listado', {orquideas, climas})
            })
    },
    detalle : (req, res) => {
        db.Orquideas.findByPk(req.params.id, {
            include: [{ association: 'climas' }]
        })
            .then(function (orquideas) {
                res.render("Client/detail", { orquideas })
            })
    }
}

module.exports = ClientController