const db = require('express').Router();
//const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

db.get('/db', (req, res) => {
    readFromFile('./db/feedback.json').then((data) => res.json(JSON.parse(data)));
});