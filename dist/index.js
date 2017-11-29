"use strict";
exports.__esModule = true;
var express = require("express");
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var methodOverride = require("method-override");
var cors = require('cors');
var app = express();
var port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());
app.use(cors());
app.get('/test', function (req, res) {
    res.send('hello');
});
app.listen(port, function () {
    console.log('Server listening on port %d in %s mode', port, app.settings.env);
});
exports.App = app;
//# sourceMappingURL=index.js.map