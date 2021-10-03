//in order to use express.js
const express = require ('express'); 

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//a routes when you open localhost:page will display with res.json 
app.get('/', (req, res) => {
    res.json({message: "Hello world"});
}); 


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });