const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToDatabase } = require('./database');
const { setupRoutes } = require('./routes');

const app = express();
const port = 8887;

app.use(bodyParser.json());
app.use(cors());

connectToDatabase();
setupRoutes(app);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});