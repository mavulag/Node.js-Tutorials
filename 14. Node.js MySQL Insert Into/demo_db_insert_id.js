/*
Get Inserted ID

For tables with an auto increment id field, you can get the id of the row you just inserted by asking the result object.

Note: To be able to get the inserted id, only one row can be inserted.

Example

Insert a record in the "customers" table, and return the ID:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted, ID: " + result.insertId);
  });
});

Save the code above in a file called "demo_db_insert_id.js", and run the file:

Run "demo_db_insert_id.js"

C:\Users\Your Name>node demo_db_insert_id.js

Which will give you something like this in return:

1 record inserted, ID: 15
*/ 