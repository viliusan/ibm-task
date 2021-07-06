const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors())

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded())

const port = 9999;

app.post('/clickedArticle', (req, res) => {
    console.log(req.body);
})

app.post('/userActions', (req, res) => {
    console.log(req.body);
    return "";
})

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});