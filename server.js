const express= require('express'); // module returs in function 
const app =express();
let user= 'abenet';
// Define a router
const router = express.Router();

// Middleware function
const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

// Register the middleware with the router
router.use(logger);

// Route handlers
// write method is not response
// always use res.end() if we use write method
router.get('/', (req, res) => {
  res.write('Home Page');
  res.end();
});

router.get('/about', (req, res, next) => {
  res.write('About Page');
  next();
  res.write('Welcome to').end();

});

// Register the router with the main app
app.use('/', router);

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});