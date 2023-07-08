const express= require('express'); // module returs in function 
const app =express();
app.get('/', (req,res)=>{
    res.send('Hello World');
    console.log('Hello World');
    
});

