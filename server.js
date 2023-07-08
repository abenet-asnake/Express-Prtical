const express= require('express'); // module returs in function 
const app =express();
app.get('/', (req,res)=>{
    res.send('Hello World');
    console.log('Hello World');

});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
