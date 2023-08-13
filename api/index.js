require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
app.use(cors());

const Connection = require('./connection');
const mongoString = process.env.DATABASE_URL;
const database = new Connection(mongoString);

database.start();

const videosRoutes = require('./api/videos/routes');
const productsRoute = require('./api/products/routes');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    }),
);

app.use('/api', videosRoutes);
app.use('/api', productsRoute);

app.listen(3000, () => {
    console.log(`Server Started at 3000`)
});