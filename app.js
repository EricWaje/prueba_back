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
    const id = req.params.id;
    const product = products.find((prod) => prod.id === parseInt(id));

    if (product) {
        res.json(product);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params.id;
    notes = notes.filter((note) => note.id !== parseInt(id));
    res.status(204).end();
});

app.post('/api/notes', (req, res) => {
    const note = req.body;
    const newNote = {
        id: Math.random().toString(),
        content: 'Nueva nota',
        important: true,
    };

    notes = [...notes, newNote];
    res.status(201).json(note);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app levantada en el puerto ${PORT}`);
});
