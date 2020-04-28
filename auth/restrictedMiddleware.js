const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../config/secret.js');

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (authorization) {
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if (error) {
                res.status(401).json({ errorMessage: 'You are not authorized!'})
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(400).json({ errorMessage: 'Must provide credentials'})
    }
};