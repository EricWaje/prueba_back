require('dotenv').config();
require('./mongo');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const Product = require('./models/Product');

app.get('/', (req, res) => {
    res.send('<h1>Api de Eric</h1>');
});

app.get('/api/products', (req, res) => {
    Product.find({}).then((prod) => {
        res.json(prod);
    });
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Product.findById(id)
        .then((prod) => {
            if (prod) {
                res.json(prod);
            } else {
                res.status(404).end();
            }
        })
        .catch((error) => {
            console.log(error);
            res.status(400).end();
        });
});

app.put('/api/products/:id', (req, res) => {
    const { id } = req.params;
    const product = req.body;

    const newProductInfo = {
        name: product.name,
        price: product.price,
        stock: product.stock,
        img: product.img,
    };

    Product.findByIdAndUpdate(id, newProductInfo, { new: true }).then(
        (response) => {
            res.json(response);
        }
    );
});

app.delete('/api/products/:id', (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then((response) => {
            res.status(204).end();
        })
        .catch((error) => {
            console.log(error);
        });
});

app.post('/api/products', (req, res) => {
    const product = req.body;

    const newProduct = new Product({
        name: product.name,
        price: product.price,
        stock: product.stock,
        img: product.img,
    });

    newProduct.save().then((saveProduct) => {
        res.json(saveProduct);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app levantada en el puerto ${PORT}`);
});
