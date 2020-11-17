const enrutador = require('express').Router();
const db_bypass = require('../../../connectionbypass');
enrutador.get('/', (req, resp, done)=> {

    db_bypass.sp('sp_dealergeek_all')
        .then(function(_dbResult) {
            if (_dbResult.originalError){
                return resp.status(400).json({
                    info: 'Error',
                    message: _dbResult.originalError.message
                });
            }

            if(_dbResult.recordsets) {
                return resp.json( {
                        info: 'ok',
                        data: _dbResult.recordsets[0]
                    });
            }

            return resp.status(204).json({
                info: 'warning',
                data: _dbResult
            });
        })
        .catch(function(err) {
            return resp.status(400).json({
                info: 'Error',
                message: err
            })
        });

});

enrutador.post('/', (req, resp, done)=> {
    console.log(req.body);
    const arrayParams = [
        { name: 'nombres', value: req.body.nombres},
        { name: 'apellidos', value: req.body.apellidos},
        { name: 'direccion', value: req.body.direccion},
        { name: 'ciudad', value: req.body.ciudad}];
    db_bypass.sp('sp_dealergeek_setter', arrayParams)
        .then(function(_dbResult) {
            if (_dbResult.originalError){
                return resp.status(400).json({
                    info: 'Error',
                    message: _dbResult.originalError.message
                });
            }

            if(_dbResult.recordsets) {
                return resp.json( {
                        info: 'ok',
                        data: _dbResult.recordsets[0]
                    });
            }

            return resp.status(204).json({
                info: 'warning',
                data: _dbResult
            });
        })
        .catch(function(err) {
            return resp.status(400).json({
                info: 'Error',
                message: err
            })
        });

})

module.exports = enrutador;