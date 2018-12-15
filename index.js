//starting point
const express = require('express');
const http = require('http');
const bodyparser = require('body-parser')
const morgan = require('morgan');
const app = express(); 
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
//db setup
mongoose.Promise= global.Promise;
mongoose
  .connect('mongodb://localhost:27017/project')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyparser.json({type:'*/*'})); 
router(app);

//server setup
const port = process.env.PORT || 4000;
const server = http.createServer(app);
server.listen(port);
console.log('Server is running');