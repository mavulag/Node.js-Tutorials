/*
Delete a Table

You can delete an existing table by using the "DROP TABLE" statement:

Example

Delete the table "customers":

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DROP TABLE customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table deleted");
  });
});

Save the code above in a file called "demo_db_drop_table.js" and run the file:

Run "demo_db_drop_table.js"

C:\Users\Your Name>node demo_db_drop_table.js

Which will give you this result:

Table deleted
*/ 