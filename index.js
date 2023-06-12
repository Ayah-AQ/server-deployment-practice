'use strict';

require('dotenv').config();
const PORT = 8000;

const { start } = require('./server');
start(PORT);