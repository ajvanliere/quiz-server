const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const router = require('./router');
const User = require('./models/userModel');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: true
}));
app.use(express.static('client'));
router.set(app);


app.listen(config.port, () => console.log('App listening on port '+ config.port));