const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./src/api');

const PORT = 8080;

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use('/api', routes);

app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
