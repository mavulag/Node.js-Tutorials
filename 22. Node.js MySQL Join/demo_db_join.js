/*
Join Two or More Tables
You can combine rows from two or more tables, based on a related column between them, by using a JOIN statement.

Consider you have a "users" table and a "products" table:

users
[
  { id: 1, name: 'John', favorite_product: 154},
  { id: 2, name: 'Peter', favorite_product: 154},
  { id: 3, name: 'Amy', favorite_product: 155},
  { id: 4, name: 'Hannah', favorite_product:},
  { id: 5, name: 'Michael', favorite_product:}
]
products
[
  { id: 154, name: 'Chocolate Heaven' },
  { id: 155, name: 'Tasty Lemons' },
  { id: 156, name: 'Vanilla Dreams' }
]
These two tables can be combined by using users' favorite_product field and products' id field.

Example
Select records with a match in both tables:

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
Note: You can use INNER JOIN instead of JOIN. They will both give you the same result.

Save the code above in a file called "demo_db_join.js" and run the file:

Run "demo_db_join.js"

C:\Users\Your Name>node demo_db_join.js
Which will give you this result:

[
  { user: 'John', favorite: 'Chocolate Heaven' },
  { user: 'Peter', favorite: 'Chocolate Heaven' },
  { user: 'Amy', favorite: 'Tasty Lemons' }
]
As you can see from the result above, only the records with a match in both tables are returned.
*/ 

/*
Left Join
If you want to return all users, no matter if they have a favorite product or not, use the LEFT JOIN statement:

Example
Select all users and their favorite product:

SELECT users.name AS user,
products.name AS favorite
FROM users
LEFT JOIN products ON users.favorite_product = products.id
Which will give you this result:

[
  { user: 'John', favorite: 'Chocolate Heaven' },
  { user: 'Peter', favorite: 'Chocolate Heaven' },
  { user: 'Amy', favorite: 'Tasty Lemons' },
  { user: 'Hannah', favorite: null },
  { user: 'Michael', favorite: null }
]
*/ 

/*
Right Join
If you want to return all products, and the users who have them as their favorite, even if no user have them as their favorite, use the RIGHT JOIN statement:

Example
Select all products and the user who have them as their favorite:

SELECT users.name AS user,
products.name AS favorite
FROM users
RIGHT JOIN products ON users.favorite_product = products.id
Which will give you this result:

[
  { user: 'John', favorite: 'Chocolate Heaven' },
  { user: 'Peter', favorite: 'Chocolate Heaven' },
  { user: 'Amy', favorite: 'Tasty Lemons' },
  { user: null, favorite: 'Vanilla Dreams' }
]
Note: Hannah and Michael, who have no favorite product, are not included in the result.
*/ 