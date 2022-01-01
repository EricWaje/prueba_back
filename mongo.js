const mongoose = require('mongoose');

const connectionString2 = process.env.MONGO_DB_URI;

mongoose
    .connect(connectionString2)
    .then(() => {
        console.log('la conexión es óptima');
        console.log('Database_URL', process.env.MONGO_DB_URI);
    })
    .catch((error) => {
        console.log(error);
    });
