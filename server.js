require('dotenv').config();
const express = require("express");
const path = require('path')
const inventory = require("./inventory/inventory");

const { PORT } = process.env

const app = express();

// Serving up the static build file for React
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

// Sending my inventory.js to React to map and render
app.get('/api', (req, res) => {
    res.json(inventory)
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
