/*
Insert Into Table
To fill a table in MySQL, use the "INSERT INTO" statement.

Example
Insert a record in the "customers" table:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
*/ 

/*
Save the code above in a file called "demo_db_insert.js", and run the file:

Run "demo_db_insert.js"

C:\Users\Your Name>node demo_db_insert.js

Which will give you this result:

Connected!
1 record inserted
*/ 

/*

*/ 