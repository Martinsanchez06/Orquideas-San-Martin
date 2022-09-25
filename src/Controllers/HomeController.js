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
        Promise.all([orquideasEncontradas, seccionesEncontradas, climasEncontradas])
            .then(function ([orquideas, secciones, climas]) {
                res.render('home/home', { orquideas, secciones, climas })
            })

        // db.Orquideas.findAll()
        // .then(function (orquideas) {
        //     res.render("home/home", { orquideas })
        // })
    }
}

module.exports = HomeController