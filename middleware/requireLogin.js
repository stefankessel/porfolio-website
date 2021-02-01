
const requireLogin = (req, res, next) => {
    if(!req.user){
        return res.send('You must log in')
    }
    next();
}

module.exports = requireLogin;