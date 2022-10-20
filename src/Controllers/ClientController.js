const fs = require('fs')
const bcryptjs = require('bcryptjs');
const path = require('path')
const db = require('../database/models')
const Op = db.Sequelize.Op;


const ClientController = {

    // ------ PRODUCTOS ------

    lista: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        Promise.all([orquideasEncontradas, climasEncontrados])
            .then(function ([orquideas, climas]) {
                res.render('Client/listado', { orquideas, climas })
            })
    },
    detalle: (req, res) => {
        db.Orquideas.findByPk(req.params.id, {
            include: [{ association: 'climas' }]
        })
            .then(function (orquideas) {
                res.render("Client/detail", { orquideas })
            })
    },

    search: (req, res) => {
        try {
            
            let orquideasEncontradas = db.Orquideas.findAll({
                include: [{ association: 'climas' }],
                where: {
                    nombre: { [Op.like]: `%${req.query.search}%` }
                }
            })
            let categoriasEncontradas = db.categorias.findAll()
            Promise.all([orquideasEncontradas, categoriasEncontradas])
                .then(function ([orquideas, categorias]) {
                    res.render("Client/resultado", { orquideas, categorias})
                })


        } catch (error) {
            res.render('error',{ error })
        }

    },

    // ------USUARIOS------

    registroForm: (req, res) => {
        console.log(req.cookies.userEmail)
        res.render('Client/registro')
    },
    registro: (req, res) => {
        try {
            db.usuarios.create({   
                ...req.body,
                tipoDeUsuario: 1,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                contraseniaConf: bcryptjs.hashSync(req.body.contraseniaConf, 10),
            })
            res.redirect('/')
        } catch (error) {
            res.send('error')
        }
    },
    loginForm: (req, res) => {
        db.usuarios.findAll()
            .then(function (usuarios) {
                res.render('Client/login')
            })
    },
    login: (req, res) => {
        db.usuarios.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(function (usuarioParaCrear) {
                if (usuarioParaCrear) {
                    let contraseñaCorrecta = bcryptjs.compareSync(req.body.contrasenia, usuarioParaCrear.contrasenia)
                    if (contraseñaCorrecta) {
                        delete usuarioParaCrear.contrasenia;
                        delete usuarioParaCrear.contraseniaConf;
                        req.session.usuarioLogueado = usuarioParaCrear;

                        if (req.body.recuerdame) {
                            res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60)});
                        } 


                        return res.redirect('perfil');
                    } else {
                        return res.render('Client/login', {
                            errors: {
                                email: {
                                    msg: 'las credenciales no son validas'
                                }
                            }
                        })
                    }
                }
                return res.render('Client/login', {
                    errors: {
                        email: {
                            msg: 'Usuario no valido'
                        }
                    }
                })
            })
    },
    perfil: (req, res) => {
        let emaiil = req.session.usuarioLogueado.email
        db.usuarios.findOne({
            where: { email: emaiil },
        })
            .then(function (usuarios) {
                
                res.render("Client/perfil", {
                    usuarios
                })
            })
    },
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/")
    }
}

module.exports = ClientController