const enrutador = require('express').Router();
enrutador.use('/api', require('./api'));

module.exports = enrutador;