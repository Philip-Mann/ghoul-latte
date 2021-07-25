require('dotenv').config();
const express = require("express");
const path = require('path')
const inventory = require("./inventory/inventory");
const cors = require('cors')


const app = express();
app.use(cors())
const { PORT } = process.env

// Serving up the static build file for React
app.use(express.static(path.resolve(__dirname + '/react-ui/build')));

// Sending my inventory.js to React to map and render
app.get('/api', (req, res) => {
    res.json(inventory)
});

// app.use to use middleware?
// http://expressjs.com/en/guide/using-middleware.html
app.use('/login', (req, res) => {
  res.send(
    {
      adminToken: 'd0m1nga-3l1z0nd0'
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
