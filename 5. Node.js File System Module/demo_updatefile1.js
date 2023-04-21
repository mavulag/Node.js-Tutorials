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
Update Files
The File System module has methods for updating files:

fs.appendFile()
fs.writeFile()

The fs.appendFile() method appends the specified content at the end of the specified file:
*/ 

// Append "This is my text." to the end of the file "mynewfile1.txt":

var fs = require('fs');

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
})