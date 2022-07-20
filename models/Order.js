const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    cart: [
        {
            name: String,
            price: Number,
            stock: Number,
            img: String,
            categoria: String,
            cantidad: Number,
            id: String,
        },
    ],
    total: Number,
    user: String,
    phone: Number,
});

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        const borrarIdOrder = returnedObject.cart.find((prod) => prod._id);
        delete borrarIdOrder._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;
