const enrutador = require('express').Router();
enrutador.use('/mantenimiento', require('./repo/mantenimiento'));

module.exports = enrutador;