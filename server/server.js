const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
const cors = require('cors');

const port = require("./package.json").port;
const routes = require('./routes');
const en_us = require('./languages/en_us.json');

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

app.get('/en_us', function (req, res) {
  res.send(en_us);
});

// start express server on port 8080
app.listen(port, () => {
  console.log(`server started on port ${port}`);
});