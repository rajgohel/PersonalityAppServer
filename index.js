const express = require('express');
const app = express();
var cors = require('cors')
const port = 5000;
var ApiController = require('./controllers/apiController');

app.use(cors());

app.get('/', ApiController.getQuestions);

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
}); 
