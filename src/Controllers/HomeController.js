const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const HomeController = {
    home: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        let categoriasEncontradas = db.categorias.findAll()
        let tamaniosEncontrados = db.tamanios.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados, categoriasEncontradas, tamaniosEncontrados])
            .then(function ([orquideas, climas, categorias, tamanios ]){
                res.render('home/home', {orquideas, climas, categorias, tamanios})
            })


        // db.Orquideas.findAll()
        // .then(function (orquideas) {
        //     res.render("home/home", { orquideas })
        // })
    }
}

module.exports = HomeController