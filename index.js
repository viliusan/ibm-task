const express = require('express');
const axios = require('axios');
const app = express();

const port = 9999;
const apiToken = 'd6ec65a52238e8d2bdb0e22179e2327c';

app.post('/clickedArticle', (req, res) => {
    console.log(req.body);
})

app.post('/userActions', (req, res) => {
    console.log(req.body);
})

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});