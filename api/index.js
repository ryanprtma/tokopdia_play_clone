const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('dotenv').config()
console.log('environment    ', process.env.ENVIRONMENT)
console.log('PORT    ', process.env.PORT)
console.log('MONGO_CONNECTION_STRING    ', process.env.MONGO_CONNECTION_STRING)

if (process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}

const app = express();
const port = process.env.PORT || 3080;

app.use(cors());
app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

const Connection = require('./connection');
const mongoString = process.env.MONGO_CONNECTION_STRING;
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

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './ui/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
});