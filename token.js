const express = require('express');
const app = express();
const jwt= require('jsonwebtoken');
const mongoose = require('mongoose');
const port=3000;
app.use(express.json());
app.get('/api/login', (req, res) => {
    // deconstruct the request
    const {user,password} = req.body;
    
});
app.listen(port,()=>{
    console.log(`listening on ${port}`);
});