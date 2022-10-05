const db = require('../database/models')


function userLoggedMiddleware (req, res, next) {
    res.locals.isLogged = false;
    
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie =  db.usuarios.findOne({
        where: { email: emailInCookie },
    });
    
    console.log(userFromCookie);

    if (userFromCookie) {
        req.session.userlogged = userFromCookie;
    }

    if (req.session && req.session.usuarioLogueado) {
        res.locals.isLogged = true;
        res.locals.userlogged = req.session.userlogged;
    }
    
    
    next();
};

module.exports = userLoggedMiddleware;