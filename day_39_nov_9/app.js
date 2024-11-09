const express = require('express');
const cors = require('cors');
const shortid = require('shortid');
const mongoose = require('mongoose');
const app = express();
// middlewares
app.use(express.json());
app.use(cors());

async function connectToDB() {
    await mongoose.connect('mongodb://127.0.0.1/sept_2024');
    console.log('Database connection established')
}

// create url schema
const urlSchema = new mongoose.Schema({
    originalUrl: String,
    shortUrl: String,
    urlCode: String
})

// create a model
const urlModel = mongoose.model('urls', urlSchema);

app.post('/api/shorten', async (req, res) => {
    const { originalUrl } = req.body;
    const urlCode = shortid.generate();

    const payload = {
        originalUrl: originalUrl,
        urlCode: urlCode,
        shortUrl: `http://localhost:5000/${urlCode}`
    }

    try {
        await urlModel.create(payload);
        res.json(payload);
    } catch (err) {
        res.json(err)
    }
})
app.get('/:code', async (req, res) => {
    const urlCode = req.params.code;
    const response = await urlModel.findOne({ urlCode });
    if (response) {
        res.redirect(response.originalUrl);
    } else {
        res.send('No record found')
    }
})



app.listen(5000, async () => {
    await connectToDB();
    console.log('app running at 5000')
});