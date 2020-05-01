const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/usersModel.js');
const {jwtSecret} = require('../config/secret.js');

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;
    if(user.username.length > 0 && user.password.length > 0 && user.over18 == true) {
        Users.add(user)
        .then(saved => {
            res.status(201).json({message: `Welcome aboard, ${user.username}!`, id: saved.id});
        })       
        .catch(error => {
            res.status(500).json({ errorMessage: 'There was an issue saving the user'});
            console.log('there was an issue saving the user', error);
        });  
    } else {
        res.status(400).json({ errorMessage: 'Invalid credentials. Must have a username, password, and be over 18.'});
    }
      
});

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    Users.findBy({ username})
        .first()
        .then( user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = createToken(user);
                res.status(200).json({ message: `Welcome back, ${user.username}`, token});
            } else {
                res.status(401).json({ errorMessage: "Invalid credentials, try again."});
            }
        })
        .catch(error => {
            res.status(500).json({ errorMessage: 'There was an error'});
            console.log('There was an error logging in', error);
        });
});

function createToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    };

    const options = {
        expiresIn: '1h'
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;