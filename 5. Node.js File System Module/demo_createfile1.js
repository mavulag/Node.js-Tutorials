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
Create Files
The File System module has methods for creating new files:

fs.appendFile()
fs.open()
fs.writeFile()

The fs.appendFile() method appends specified content to a file.
 If the file does not exist,
 the file will be created:
*/ 

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});