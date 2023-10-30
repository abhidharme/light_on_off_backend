const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())

app.use(bodyParser.json());

// Simulated state of the light (initially off)
let isLightOn = false;

// GET method to check the light status
app.get('/light', (req, res) => {
    res.json({ lightStatus: isLightOn ? 'on' : 'off' });
});

// PATCH method to toggle the light status
app.patch('/light', (req, res) => {
    isLightOn = !isLightOn;
    res.json({ lightStatus: isLightOn ? 'on' : 'off' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
