/*
Creating a Database

To create a database in MySQL, use the "CREATE DATABASE" statement:

Example

Create a database named "mydb":

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

Save the code above in a file called "demo_create_db.js" and run the file:

Run "demo_create_db.js"

C:\Users\Your Name>node demo_create_db.js

Which will give you this result:

Connected!

Database created
*/ 