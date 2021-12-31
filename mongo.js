const mongoose = require('mongoose');

const connectionString2 = process.env.MONGO_DB_URI;

mongoose
    .connect(connectionString2)
    .then(() => {
        console.log('la conexión es óptima');
    })
    .catch((error) => {
        console.log(error);
    });
