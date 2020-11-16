const express = require('express'),
    bodyParser = require ('body-parser'),
    morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

// permito cualquier acceso a mis endpoints por cuestiones de prueba.
app.use((req, resp, done)=> {
    req.header('Access-control-Allow-Origin', '*');
    req.header('Access-control-Allow-Headers', '*');
    req.header('Access-control-Allow-Methods', '*');
    req.header('allow', 'GET, POST, PUT, DELETE, OPTIONS');
    // permitiendo desde mis middlewares el uso de cualquier metodo-.
    done();
});

// Creo el enrutado principal.
app.use(require('./rutas'));

/* En caso de que se hagan peticiones sin destino en el servidor, retorna un 404
con el sieguiente texto */
app.use(function(req, resp, done) {
    const err = new Error("Aparentemente, la ruta no fué encontrada");
    err.status = 404;
    done(err);
});

// levanto servicios.
const server = app.listen(6968, ()=> {
    console.log(`Escuchando el puerto 6968`);
});