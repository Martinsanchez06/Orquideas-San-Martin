const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const HomeController = {
    home: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        let categoriasEncontradas = db.categorias.findAll()
        let tamaniosEncontrados = db.tamanios.findAll()
        let seccionesEncontradas = db.secciones.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados, categoriasEncontradas, tamaniosEncontrados, seccionesEncontradas])
            .then(function ([orquideas, climas, categorias, tamanios, secciones ]){
                res.render('home/home', {orquideas, climas, categorias, tamanios, secciones})
            })


        // db.Orquideas.findAll()
        // .then(function (orquideas) {
        //     res.render("home/home", { orquideas })
        // })
    }
}

module.exports = HomeController