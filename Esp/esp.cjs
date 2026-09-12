const express = require('express');
const app = express();
const PORT = 3000;

app.get('/esp-data', (req, res) => {
    // Send plain text back to the ESP32
    res.send('Hello from Node.js backend!\nStatus: Live');
});

// Bind to 0.0.0.0, not localhost
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running and listening on port ${PORT}`);
});