const express = require('express');
const app = express();

app.use('/hello', (req, res) => {
    res.send('Hellooooooooooooooooooooo')
})
app.all('/hii', (req, res) => {
    res.send('Hiiiiiiiiiiiii')
})

app.listen(5000);