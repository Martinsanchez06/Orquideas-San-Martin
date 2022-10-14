const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const HomeController = {
    home: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll({
            include: {
                all: true,
                nested: true
            }
        })
        let seccionesEncontradas = db.secciones.findAll()
        let climasEncontradas = db.climas.findAll()
        let categoriasEncontradas = db.categorias.findAll()
        Promise.all([orquideasEncontradas, seccionesEncontradas, climasEncontradas, categoriasEncontradas])
            .then(function ([orquideas, secciones, climas, categorias]) {
                res.render('Home/home', { orquideas, secciones, climas, categorias})
            })
    }
}

module.exports = HomeController