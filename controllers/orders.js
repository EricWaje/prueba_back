const Order = require('../models/Order');

const postOrder = async (req, res) => {
    try {
        const { name, price, stock, img, cantidad, total, user, phone } =
            req.body;
        const newOrder = new Order({
            name,
            price,
            stock,
            img,
            cantidad,
            total,
            user,
            phone,
        });

        await newOrder.save().then((saveOrder) => {
            res.json(saveOrder);
        });
    } catch (error) {
        console.error(error);
    }
};

const all = async (req, res) => {
    try {
        Order.find({}).then((prod) => {
            res.json(prod);
        });
    } catch (error) {
        console.error(error);
    }
};

const single = async (req, res) => {
    try {
        const { id } = req.params;
        await Order.findById(id).then((prod) => {
            if (prod) {
                res.json(prod);
            } else {
                res.status(404).end();
            }
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { postOrder, all, single };
