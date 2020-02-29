'use strict'
//----------------------------------------------------------------------------------------//
const app = require('../index');
//----------------------------------Carrega as Bibliotecas--------------------------------//
const http = require('http');
const debug = require('debug')('apinode:server');
//-------------------------------Criando app e definindo porta----------------------------//
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
//------------------------------------Criando o servidor----------------------------------//
const server = http.createServer(app);
//----------------------------------------------------------------------------------------//
server.listen(port);
server.on('error', onError);
server.on('listening', onListenig);
console.log('Api rodado na porta ' + port);
//--------------------------------- --Normaliza porta-------------------------------------//
function normalizePort(val){
    const port = parseInt(val, 10);
    if(isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;
}
//-------------------------------------Tratando erros do servidor--------------------------//
function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }
    const bind = typeof port === 'string'? 'Pipe ' + port : 'Port ' + port;
    switch(error.code){
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListenig(){
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listenning on ' + bind);
}
//----------------------------------------------------------------------------------------//