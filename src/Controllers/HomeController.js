const fs = require('fs')
const path = require('path')
const db = require('../database/models')


const HomeController = {
    home: (req, res) => {
        res.render('home/home');
    }
}

module.exports = HomeController