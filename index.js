const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { connectMongoDB } = require('./connection');
const { authenticateUser, checkAuth } = require('./middlewares/auth');
const urlRoute = require('./routes/url');
const staticRoute = require('./routes/static');
const userRoute = require('./routes/user');

const app = express();
const PORT = 3001;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', checkAuth, staticRoute);
app.use('/urls', authenticateUser, urlRoute);
app.use('/users', userRoute);

connectMongoDB('mongodb://127.0.0.1:27017/url-shortner');


app.listen(PORT, () => console.log(`listening to port ${PORT} `))