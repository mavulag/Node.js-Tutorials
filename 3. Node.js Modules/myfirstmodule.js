/*
What is a Module in Node.js?
Consider modules to be the same as JavaScript libraries.

A set of functions you want to include in your application.
*/ 

/*
Built-in Modules
Node.js has a set of built-in modules which you can use without any further installation.
*/ 

/*
Include Modules
To include a module, use the require() function with the name of the module:

var http = require('http');

Now your application has access to the HTTP module, and is able to create a server:
*/ 

/*
Create Your Own Modules
You can create your own modules, and easily include them in your applications.

The following example creates a module that returns a date and time object:
*/ 

exports.myDateTime = function () {
    return Date();
}

/*
Use the exports keyword to make properties and methods available outside the module file.
*/ 

/*
Include Your Own Module
Now you can include and use the module in any of your Node.js files.
*/ 

