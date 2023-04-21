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

The fs.open() method takes a "flag" as the second argument,
 if the flag is "w" for "writing",
 the specified file is opened for writing.
 If the file does not exist, an empty file is created:
*/ 

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});