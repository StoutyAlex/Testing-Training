const express = require('express');
const bodyParser = require('body-parser');
const maths = require('./maths');

const app = express();

app.use(bodyParser.json({ type: ['application/json', 'application/csp-report'] }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/maths', maths);

module.exports = app;