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

The fs.writeFile() method replaces the specified file and content if it exists.
 If the file does not exist,
 a new file,
 containing the specified content,
 will be created:
*/ 

var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});