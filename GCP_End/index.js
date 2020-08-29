const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();

app.use(bodyParser.json());

app.post("/webhook", (req, res) => {
    console.log(req.body) // Call your action on the request here
    res.status(200).end() // Responding is important
});

app.get('/index.html', (req, res) => {
    res.send('cheese');
})

app.listen(1002, () => console.log('Cheese'));