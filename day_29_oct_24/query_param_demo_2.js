const express = require('express');
const app = express();

// pass city as query param
app.get('/weatherInfo', async (req, res) => {
    const { city } = req.query;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`)
    let finalResponse = await response.json();
    res.send(finalResponse);
});

app.listen(5000, () => {
    console.log('app running at 5000')
});