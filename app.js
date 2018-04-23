// Requires
var express = require('express');
var mongoose = require('mongoose');

// Inicializar variables
var app = express();

// Conexion a la BD
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
    if (err) throw err; // aqui es mora el procés, es deté en cas de error
    console.log('Base de dades Online');
});

// Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petició feta correctament'
    });

});

// Excuchar peticiones
app.listen(3000, () => {
    console.log('Express server port 3000 online');

});