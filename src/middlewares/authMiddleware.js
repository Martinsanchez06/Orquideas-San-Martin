function authMiddleware(req, res, next) {
    if (!req.session.usuarioLogueado) {
        return res.redirect("/usuario/login");
    }
    next();
};

module.exports = authMiddleware;