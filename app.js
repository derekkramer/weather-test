const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

app.listen(port, () => console.log(`Listening on port ${port}`));