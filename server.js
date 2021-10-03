//in order to use express.js
const express = require('express');
//database setting module 
const db = require('./db/connection');
//routes 
const apiRoutes = require('./routes/apiRoutes'); 

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', apiRoutes);


//a routes when you open localhost:page will display with res.json 
app.get('/', (req, res) => {
    res.json({ message: "Hello world" });
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});