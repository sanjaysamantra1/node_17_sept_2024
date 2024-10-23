const express = require('express');
const app = express();

app.use('/hello', (req, res) => { // the handler gets called for every HTTP Method
    res.send('Hellooooooooooooooooooooo')
})
app.get('/hii', (req, res) => { // the handler gets called for  HTTP get Method
    res.send('Hiiiiiiiiiiiii')
})

app.listen(5000);