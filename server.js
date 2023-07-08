const express= require('express'); // module returs in function 
const app =express();
app.get('/', (req,res)=>{
    res.send('Hello World get server ');
    console.log('Hello World');

});

app.put('/', (req,res)=>{
     res.send('I am using put replace method  ');
});

app.post('/', (req,res)=>{
    res.send('I am using post method summit on server ');
});

app.patch('/', (req,res)=>{
    res.send('I am using post method summit on server ');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});
