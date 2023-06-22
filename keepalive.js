const express = require("express");
const http = require("http");
const app = express();

const server = http.createServer({}, app).listen(3000);

// This is the important stuff
server.keepAliveTimeout = (60 * 1000) + 1000;
server.headersTimeout = (60 * 1000) + 2000;
