/*
Node.js as a File Server
The Node.js file system module allows you to work with the file system on your computer.

To include the File System module, use the require() method:

var fs = require('fs');

Common use for the File System module: (CRUDER)

Read files
Create files
Update files
Delete files
Rename files
*/ 

/*
Read Files
The fs.readFile() method is used to read files on your computer.

Assume we have the following HTML file (located in the same folder as Node.js):
*/ 

/*
Create a Node.js file that reads the HTML file,
 and return the content:
*/ 

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('demofile1.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

/*
Save the code above in a file called "demo_readfile.js", and initiate the file:

Initiate demo_readfile.js:

C:\Users\Your Name>node demo_readfile.js
If you have followed the same steps on your computer,
 you will see the same result as the example: http://localhost:8080
*/ 