var _sql = require('mssql');

const testConfig = require('./testlicent.json');
// const testConfig = require('../clients/meerDesarrollo.json');
const testPool = new _sql.ConnectionPool(testConfig);
const testSqlConnection = testPool.connect();

testPool.on('error', err => {
    console.log(err);
});


// Conexión de prueba a base de datos prueba de Microsoft Azure
// RAW QUERY
async function raw(query) {
    await testSqlConnection;
    try {
        var rawRequest = testPool.request();
        var results = await rawRequest.query(query);
        return results;
    } catch (err) {
        return err;
    }
}

// STORED PROCEDURE
async function sp(spname, params) {
    await testSqlConnection;
    try {
        var spRequest = testPool.request();
        if (Array.isArray(params)) {
            params.forEach((param) => {
                spRequest.input(param.name, param.value);
            });
        }
        var results = await spRequest.execute(spname);
        return results;
    } catch (err) {
        return err
    }
}


module.exports = { raw, sp };