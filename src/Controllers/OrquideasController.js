const fs = require('fs')
const path = require('path')
const db = require('../database/models')

const OrquideasController = {
    create: (req, res)=> {
        res.render('orquideas/formularioDeCreacion')
    }
}

module.exports = OrquideasController