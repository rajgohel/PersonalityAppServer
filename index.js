const express = require('express');
const { PORT } = require('./constants/apiConstants');

const app = express();
var cors = require('cors')
const port = PORT;

var ApiController = require('./controllers/apiController');

app.use(cors());

app.get('/', ApiController.getQuestions);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 
