const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const HomeController = {
    home: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados])
            .then(function ([orquideas, climas]){
                res.render('home/home', {orquideas, climas})
            })
        // db.Orquideas.findAll()
        // .then(function (orquideas) {
        //     res.render("home/home", { orquideas })
        // })
    }
}

module.exports = HomeController