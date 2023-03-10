const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();

    }
    req.flash('error_msg', 'inicie sesion');
    res.redict('/users/signin');
};

module.exports = helpers;