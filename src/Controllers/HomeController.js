const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const HomeController = {
    home: async (req, res) => {
        try {
            const [orquideas, secciones, climas, categorias] = await Promise.all([
                db.Orquideas.findAll(),
                db.SeccionDeHome.findAll(),
                db.Climas.findAll(),
                db.Categorias.findAll()
            ]);

            res.render('Home/home', { orquideas, secciones, climas, categorias });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).send("Error interno del servidor");
        }
    }
};

module.exports = HomeController;
