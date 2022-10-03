const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require('config');
const cors = require('cors');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('Server started on port ' + PORT));