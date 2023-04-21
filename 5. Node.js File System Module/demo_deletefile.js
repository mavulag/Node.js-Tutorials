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
Delete Files
To delete a file with the File System module,  use the fs.unlink() method.

The fs.unlink() method deletes the specified file:
*/ 

var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});