require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const config = require('config');
const cors = require('cors');
const sequelize = require('./db')
const models = require('./models/models');
const router = require('./routes/index');
const path = require('path');
const fileUpload = require('express-fileupload');
const errorHandler = require('./midlleware/ErrorNendlingMidlleware');


const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use(cors());
app.use('/api', router);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server started'});
})

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('Server started on port ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

start();