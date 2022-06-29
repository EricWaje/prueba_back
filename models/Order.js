const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    name: String,
    price: Number,
    stock: Number,
    img: String,
    categoria: String,
    total: Number,
    cantidad: Number,
    user: String,
    phone: Number,
});

orderSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id;
        delete returnedObject._id;
        delete returnedObject.__v;
    },
});

const Order = model('Order', orderSchema);

module.exports = Order;
