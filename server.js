const express = require('express');
const path = require('path');

const app = express();
const port = 8081;

// Serve static files from the "public" directory
app.use(express.static('public'));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
