const express= require('express'); // module returs in function 
const app =express();
let user= 'abenet';
app.get('/', (req,res)=>{
    res.send(`WellCome, ${user}`); 
    console.log('Hello World');

});
app.get('/a/:id', (req,res)=>{
  res.send(`WellCome, ${user}`); 
  console.log('Hello World');

});
// making dydnamic routres
app.get(`/${user}/:id`, function (req,res){
  res.send(`WellCome, ${user}`); 
  console.log('This is  server ' + req.params.server);

});
// dynamically regular expressions 
app.get(`/a/:id([0-9]{3})`, function (req,res){
  res.send(`WellCome, ${user}`); 
  console.log('This Is server ');

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

app.delete('/test', (req,res)=>{
    res.send('I am using post method delete ');
});
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});




// // Define a router
// const router = express.Router();

// // Middleware function
// const logger = (req, res, next) => {
//   console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//   next();
// };

// // Register the middleware with the router
// router.use(logger);

// // Route handlers
// router.get('/', (req, res) => {
//   res.send('Home Page');
// });

// router.get('/about', (req, res) => {
//   res.send('About Page');
// });

// // Register the router with the main app
// app.use('/', router);

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });