const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();

// db setup
mongoose.connect('mongodb://localhost:auth/auth')

// app setup
router(app);
// middlewares
app.use(morgan('combined'))
// logging framework in the terminal
app.use(bodyParser.json({ type: '*/*'}))
// parses incoming requests into json no matter what the type is


// server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log('server listening on port', port);
