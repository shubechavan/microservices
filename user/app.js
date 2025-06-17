const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const connect = require('../user/db/db');
connect();
const userroutes = require('./routes/user.routes'); 

const cookieparser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use('/', userroutes);

module.exports = app;
