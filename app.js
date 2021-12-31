const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let notes = [
    { id: 1, content: 'primer contenido', important: true },
    { id: 2, content: 'segundo contenido', important: true },
    { id: 3, content: 'tercer contenido', important: false },
];

app.get('/', (req, res) => {
    res.send('<h1>holis</h1>');
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
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
