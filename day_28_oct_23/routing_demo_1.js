const express = require('express');
const app = express(); // creare express server

/* app.get('/ab?cd', (req, res) => { // acd abcd
    res.send('Response-1111111')
})
app.get('/ab+cd', (req, res) => { // abcd abbcd abbbcd abbbbbbcd
    res.send('Response-22222')
}) */
app.get('/ab*cd', (req, res) => { // abcd  abshjdhjcd  ab1627367cd
    res.send('Response-3333')
})

app.listen(5000, () => {
    console.log('Server running at 5000')
})