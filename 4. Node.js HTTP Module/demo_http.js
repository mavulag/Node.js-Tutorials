var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    /*
    If the response from the HTTP server is not supposed to be displayed as HTML,
     you should not include an HTTP header with the correct content type
    */ 
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080

/*
The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.

Save the code above in a file called "demo_http.js", and initiate the file:

Initiate demo_http.js:

C:\Users\Your Name>node demo_http.js
If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080
*/ 