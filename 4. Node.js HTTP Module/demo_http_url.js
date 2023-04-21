/*
Add an HTTP Header
If the response from the HTTP server is supposed to be displayed as HTML,
 you should include an HTTP header with the correct content type:
*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);

/*
The first argument of the res.writeHead() method is the status code,
 200 means that all is OK,
 the second argument is an object containing the response headers.
*/ 

/*
Read the Query String
The function passed into the http.createServer() has a req argument that represents the request from the client,
 as an object (http.IncomingMessage object).

This object has a property called "url" which holds the part of the url that comes after the domain name:
*/

var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8000);