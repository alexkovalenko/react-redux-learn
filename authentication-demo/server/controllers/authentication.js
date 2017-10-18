const jwt = require('jwt-simple');
const UserModel = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, config.secret);
}

exports.signup = function (req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
        return res.status(422).send({error: 'Please fill all fields'});
    }
    UserModel.findOne({email: email}, function (err, existingUser) {
        if (err) return next(err);
        if (existingUser) {
            return res.status(422).send({error: 'Email is in use'});
        }
        const user = new UserModel({
            email: email,
            password: password
        });
        user.save(function (err) {
            if (err) return next(err);
            res.json({token: tokenForUser(user)});
        });
    });
};

exports.signin = function (req, res, next) {
    res.json({token: tokenForUser(req.user)});
};