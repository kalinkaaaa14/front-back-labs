const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const db = require('./config/keys').MongoURI;
const app = express()
const expressLayouts = require('express-ejs-layouts');
const path = require('path');


mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

app.use(expressLayouts);
app.set('layout', './layouts/admin-layout');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully!"))
    .catch(err => console.log(err));

const adminRoutes = require('./api/routes/admin');
const userRoutes = require('./api/routes/user');
app.use('/admin', adminRoutes);
app.use('/', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

