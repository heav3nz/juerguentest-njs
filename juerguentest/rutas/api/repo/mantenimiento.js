const enrutador = require('express').Router();

enrutador.get('/', (req, resp, done)=> {
    resp.status(200).json({
        info: 'todo suuuuper?'
    });
})

module.exports = enrutador;