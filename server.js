// Import required modules
const express = require('express');

// Create an instance of Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000; // Specify the port number
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});