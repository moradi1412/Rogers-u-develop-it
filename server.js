//in order to use express.js
const express = require ('express');
//Connecting the MYSQL database 
const mysql = require ('mysql2');  

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect to database 
const db = mysql.createConnection (
    {
        host: 'localhost', 
          //username
        user: 'root',
        //MySQL password 
        password: 'Superman', 
        database: 'election'
    }, 
    console.log ('connected to the election databse.')
); 

//query() method runs the SQL query and executes the callback funciton and recieve the data 
// db.query ('SELECT * FROM candidates', (err, rows) => {
//     console.log (rows); 
// });

//GET a single candidate 
db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
    if (err) {
        //if not matched it will retrun empty object
        console.log(err);
    }
    console.log(row); 
}); 

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});


// Delete a candidate
db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });





//a routes when you open localhost:page will display with res.json 
app.get('/', (req, res) => {
    res.json({message: "Hello world"});
}); 


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });