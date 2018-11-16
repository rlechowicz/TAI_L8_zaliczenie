'use strict';

var express = require('express');
var app = express();

app.use(express.json());


app.use(express.static('public'));

app.listen(process.env.PORT || 3000, function () {
  console.info('Server is running')
});
