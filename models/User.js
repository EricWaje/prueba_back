const { Schema, model } = require('mongoose');

const UserSChema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

const User = model('user', UserSChema);

module.exports = User;

/* const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    username: String,
    name: String,
    passwordHash: String,
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
});

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
        delete returnedObject.passwordHash;
    },
});

const User = model('User', userSchema);

module.exports = User;
 */
