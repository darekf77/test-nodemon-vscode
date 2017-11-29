import * as http from 'http';
import * as url from 'url';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import errorHandler = require('errorhandler');
import methodOverride = require('method-override');
const cors = require('cors');
const app = express();
let port: number = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(errorHandler());
app.use(cors());

app.get('/test', (req, res) => {
    res.send('it amazing')
});

app.listen(port, function () {
    console.log('Server listening on port %d in %s mode', port, app.settings.env);
});

export var App = app;
