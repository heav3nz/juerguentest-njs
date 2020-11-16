const express = require('express'),
    bodyParser = require ('body-parser'),
    morgan = require('morgan');

const app = express();
app.use(morgan('dev'));




app.use((req, resp, done)=> {
    req.header('Access-control-Allow-Origin', '*');
    req.header('Access-control-Allow-Headers', '*');
    req.header('Access-control-Allow-Methods', '*');
    req.header('allow', 'GET, POST, PUT, DELETE, OPTIONS');
    done();
});

app.use(function(req, resp, done) {
    const err = new Error("Aparentemente, la ruta no fué encontrada");
    err.status = 404;
    done(err);
});


const server = app.listen(6968, ()=> {
    console.log(`Escuchando el puerto 6968`);
});