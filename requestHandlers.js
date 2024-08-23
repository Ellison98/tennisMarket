const fs = require('fs');
const main_view = fs.readFileSync('./main.html', 'utf-8');

const mariadb = require('./database/connect/mariadb');

function main(response) {
    console.log('main');

    mariadb.query('SELECT * FROM main', function (err, rows) {
            console.log(rows);
        });

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(main_view);
        response.end();
}

function login(response) {
    console.log('login');

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Login Page');
    response.end();
}

function redRacket(response) {
fs.readFile('./img/redRacket.png', function (error, data) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(data);
    response.end();
    });
}

function blueRacket(response) {
    fs.readFile('./img/redRacket.png', function (error, data) {
    
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write(data);
        response.end();
        });
    }

function blackRacket(response) {
fs.readFile('./img/redRacket.png', function (error, data) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(data);
    response.end();
    });
}

let handle = {};
handle['/'] = main;


/* 이미지 경로 */
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;