const express = require('express')
const app = express();

const port = 9999;

app.listen(port, () => {
    console.log(`LISTENING ON PORT ${port}!`);
})

app.get('/', (req, res) => {
    res.send('HOME PAGE!');
})