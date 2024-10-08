let http = require('http');
let url = require('url');

function start(route, handle) {
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request);
    }

    http.createServer(onRequest).listen(8888);
}

exports.start = start;