require('./mongo');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const Product = require('./models/Product');

app.get('/', (req, res) => {
    res.send('<h1>holis</h1>');
});

console.log('prueba');

app.get('/api/products', (req, res) => {
    res.json(notes);
});

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const nota = notes.find((note) => note.id === parseInt(id));

    if (nota) {
        res.json(nota);
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
