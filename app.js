require('dotenv').config();
require('./mongo');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const Product = require('./models/Product');

let products = [];

app.get('/', (req, res) => {
    res.send('<h1>holis</h1>');
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

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter((note) => note.id !== parseInt(id));
    res.status(204).end();
});

app.post('/api/products', (req, res) => {
    const product = req.body;

    const newProduct = new Product({
        name: product.name,
        price: product.price,
        stock: product.stock,
    });

    newProduct.save().then((saveProduct) => {
        res.json(saveProduct);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app levantada en el puerto ${PORT}`);
});
