const express = require('express');
const axios = require('axios');
const app = express();

const port = 9999;
const apiToken = 'd6ec65a52238e8d2bdb0e22179e2327c';

app.get('/', (req, res) => {
    console.log('User arrived at homepage')
    res.send('<h1>HOME PAGE!</h1>');
})

app.get('/search', async (req, res) => {
    const { q } = req.query;
    if (!q) {
        console.log('Empty search query entered')
        res.send("<h1>Nothing found if nothing searched.</h1>")
    } else {
    console.log(`User searched for: ${q}`)
    res.send(`<h1>Search results for: ${q}</h1>`)
    }
})

app.get('/list', (req, res) => {
    console.log('Listing articles')
    res.send('<h1>Listing articles</h1>')
})

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", port);
});