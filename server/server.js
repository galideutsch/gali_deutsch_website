const path = require("path");
const express = require("express");
const app = express();
const http = require('http');
const httpProxy = require('http-proxy');
const proxy = require("./package.json").proxy;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public", "index.html"));
});

// const proxyPort = 80;
// const proxyServer = httpProxy.createServer(options);
// let port = proxyServer.listen(proxyPort);
// console.log('Proxy listening on port ' + proxyPort);

// start express server on port 8080
app.listen(proxy, () => {
  console.log("server started on port 8080");
});