require('dotenv').config();
require('./mongo');

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const inicio = require('./routes/index');
const products = require('./routes/products');

app.use('/', inicio);
app.use('/api/products', products);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app levantada en el puerto ${PORT}`);
});
