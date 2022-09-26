const fs = require('fs')
const bcryptjs = require('bcryptjs');
const path = require('path')
const db = require('../database/models')


const ClientController = {
    lista: (req, res) => {
        let orquideasEncontradas = db.Orquideas.findAll()
        let climasEncontrados = db.climas.findAll()
        let categoriasEncontradas = db.categorias.findAll()
        let tamaniosEncontrados = db.tamanios.findAll()
        let seccionesEncontradas = db.secciones.findAll()
        Promise.all([orquideasEncontradas,climasEncontrados, categoriasEncontradas, tamaniosEncontrados, seccionesEncontradas])
            .then(function ([orquideas, climas, categorias, tamanios, secciones ]){
                res.render('Client/listado', {orquideas, climas, categorias, tamanios, secciones})
            })
    },
    detalle : (req, res) => {
        db.Orquideas.findByPk(req.params.id, {
            include: [{ association: 'climas' }]
        })
            .then(function (orquideas) {
                res.render("Client/detail", { orquideas })
            })
    },
    registroForm : (req, res) => {
        res.render('Client/registro')
    },
    registro : (req, res) => {
        try {
            db.usuarios.create({
                ...req.body,
                contrasenia: bcryptjs.hashSync(req.body.contrasenia, 10),
                contraseniaConf: bcryptjs.hashSync(req.body.contraseniaConf, 10),
            })
            res.redirect('/')
        } catch (error) {
            res.send('error')
        }
    },
    loginForm:(req, res) => {
        db.usuarios.findAll()
        .then(function (usuarios){  
            res.render('Client/login')
        })
    },
    login:(req, res)=>{
        db.usuarios.findOne({
            where : { 
                email : req.body.email
            }
        })
        .then(function (usuarioParaCrear){
            if (usuarioParaCrear) {
                let contraseñaCorrecta = bcryptjs.compareSync(req.body.contrasenia, usuarioParaCrear.contrasenia)
                console.log(contraseñaCorrecta)
                if (contraseñaCorrecta) {
                    delete usuarioParaCrear.contrasenia;
                    delete usuarioParaCrear.contraseniaConf;
                    req.session.usuarioLogueado = usuarioParaCrear;
                   
                    if (req.body.remember_user) {
                        res.cookie("userEmail", req.body.email, { maxAge: (1000 * 60) * 60 });
                    }
    
                    return res.render('Client/perfil');
                } else {
                    return res.render('login', {
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
    perfil:(req, res) => {
        let emaiil = req.session.usuarioLogueado.email
        db.usuarios.findOne({
            where: { email: emaiil },
        })
        .then(function (usuarios) {
            console.log(usuarios)
            res.render("Client/perfil", {
                usuarios
            })
        })
    }
}

module.exports = ClientController