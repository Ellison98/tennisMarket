const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariadb.query('SELECT * FROM main', function (err, rows) {
            console.log(rows);
        });

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Main Page');
        response.end();
}

function login(response) {
    console.log('login');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Login Page');
    response.end();
}

let handle = {};
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;