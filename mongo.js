const mongoose = require('mongoose');

const connectionString2 =
    'mongodb+srv://ericwaje:jbj3502@proyecto.g52vb.mongodb.net/ecommerce?retryWrites=true&w=majority';

mongoose
    .connect(connectionString2)
    .then(() => {
        console.log('la conexión es óptima');
    })
    .catch((error) => {
        console.log(error);
    });
