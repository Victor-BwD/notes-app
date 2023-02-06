const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();
require('./config/dbConfig');


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server Up and running"));