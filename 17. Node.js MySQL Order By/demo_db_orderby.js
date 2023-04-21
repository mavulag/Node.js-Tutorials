/*
Sort the Result

Use the ORDER BY statement to sort the result in ascending or descending order.

The ORDER BY keyword sorts the result ascending by default. To sort the result in descending order, use the DESC keyword.

Example

Sort the result alphabetically by name:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

Save the code above in a file called "demo_db_orderby.js" and run the file:

Run "demo_db_orderby.js"

C:\Users\Your Name>node demo_db_orderby.js

Which will give you this result:

[
  { id: 3, name: 'Amy', address: 'Apple st 652'},
  { id: 11, name: 'Ben', address: 'Park Lane 38'},
  { id: 7, name: 'Betty', address: 'Green Grass 1'},
  { id: 13, name: 'Chuck', address: 'Main Road 989'},
  { id: 4, name: 'Hannah', address: 'Mountain 21'},
  { id: 1, name: 'John', address: 'Higheay 71'},
  { id: 5, name: 'Michael', address: 'Valley 345'},
  { id: 2, name: 'Peter', address: 'Lowstreet 4'},
  { id: 8, name: 'Richard', address: 'Sky st 331'},
  { id: 6, name: 'Sandy', address: 'Ocean blvd 2'},
  { id: 9, name: 'Susan', address: 'One way 98'},
  { id: 10, name: 'Vicky', address: 'Yellow Garden 2'},
  { id: 14, name: 'Viola', address: 'Sideway 1633'},
  { id: 12, name: 'William', address: 'Central st 954'}
]
*/ 

