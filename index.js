let server = require('./server');
let router = require('./router');
let requestHandlers = require('./requestHandlers');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

server.start(router.route, requestHandlers.handle);
