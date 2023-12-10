const express = require('express');
const { connectMongoDB } = require('./connection');
const urlRoute = require('./routes/url');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/urls', urlRoute);

connectMongoDB('mongodb://127.0.0.1:27017/url-shortner');


app.listen(PORT, () => console.log(`listening to port ${PORT} `))