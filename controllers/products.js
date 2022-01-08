const Product = require('../models/Product');

const all = async (req, res) => {
    try {
        Product.find({}).then((prod) => {
            res.json(prod);
        });
    } catch (error) {
        console.error(error);
    }
};

const single = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findById(id).then((prod) => {
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

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const product = req.body;

        const newProductInfo = {
            name: product.name,
            price: product.price,
            stock: product.stock,
            img: product.img,
        };

        await Product.findByIdAndUpdate(id, newProductInfo, { new: true }).then(
            (response) => {
                res.json(response);
            }
        );
    } catch (error) {
        console.error(error);
    }
};

const deleteProd = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.findByIdAndDelete(id)
            .then((response) => {
                res.status(204).end();
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.error(error);
    }
};

const create = async (req, res) => {
    try {
        const { name, price, stock, img } = req.body;

        const newProduct = new Product({
            name,
            price,
            stock,
            img,
        });

        await newProduct.save().then((saveProduct) => {
            res.json(saveProduct);
        });
    } catch (error) {
        console.error(error);
    }
};

module.exports = { all, single, update, deleteProd, create };
