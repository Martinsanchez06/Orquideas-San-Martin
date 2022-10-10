const db = require('../database/models')

function userLoggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
    
    if (req.cookies.userEmail) {
        let emailInCookie = req.cookies.userEmail;
        let userFromCookie = db.usuarios.findOne({
            where: { email: emailInCookie },
        });
        userFromCookie
            .then(function (usuario) {
                if (req.session) {
                    req.session.usuarioLogueado = usuario;
                    
                }
                if (req.session && req.session.usuarioLogueado) {
                    if(usuario.tipoDeUsuario == 2){
                        res.locals.usuarioAdmin = true 
                    }
                    res.locals.isLogged = true;
                    res.locals.usuarioLogueado = req.session.usuarioLogueado;
                }
            })
    }
    next();
};
module.exports = userLoggedMiddleware;








