const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3001;

app.use('/', require('./routes'));
app.listen(port);


// http://localhost:3001/player