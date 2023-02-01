const express = require('express');
const path = require('path');
const {clog} = require('./middleware/clog')
const db = require ('./db/db.json');
const app = express();

const PORT = process.env.PORT || 5000;

//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use('/api', api);
app.use(clog);
app.use(express.static('public'));

//ROUTES

//Home
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.get('/db', (req, res) => {
    res.json(db);
});

//404
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/404.html'));
});













//LISTEN
app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));