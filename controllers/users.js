//const User = require('../models/User');
const User = require('../models/User');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    var { username, password } = req.body;
    if (!password || !username)
        return res.status(404).send('No se encontro usuario o contraseña');
    var dbpass = crypto.MD5(password).toString();
    var newUser = new User({
        username,
        password: dbpass,
    });
    const userExisting = await User.findOne({ username });
    if (userExisting)
        return res
            .status(401)
            .send('el usuario que ha ingresado ya existe existe');
    await newUser.save();
    const token = jwt.sign({ _id: username._id }, 'secretkey');
    res.status(200).json({ token, newUser });
};

const login = async (req, res) => {
    var { password, username } = req.body;
    const user = await User.findOne({ username });
    if (!user) return res.status(401).send('No se encontro al usuario');
    if (user.password !== crypto.MD5(password).toString())
        return res.status(401).send('Las credenciales son invalidas');
    const token = jwt.sign({ _id: username._id }, 'secretkey');

    return res.status(200).json({ token, user });
};

const verifyToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send('Unothorized request');
    }
    const token = req.headers.authorization.split(' ')[1];
    if (token == 'null') {
        return res.status(401).send('Unothorized request');
    }
    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
};

module.exports = { login, register, verifyToken };

/* const bcrypt = require('bcrypt');

const User = require('../models/User');

const create = async (req, res) => {
    const { body } = req;
    const { username, name, password } = body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        name,
        passwordHash,
    });

    const savedUser = await user.save();

    res.json(savedUser);
};

const allUsers = async (req, res) => {
    try {
        User.find({}).then((prod) => {
            res.json(prod);
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { create, allUsers };
 */
