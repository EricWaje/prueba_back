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
