import express from 'express'
import axios from 'axios';
import { createClient } from 'redis';

const redisClient = await createClient()
    .on('error', err => console.log('Redis Client Error', err))
    .connect();

const app = express();

app.get('/fetchData', async (req, res) => {
    const countryName = req.query.country || 'india';
    const url = `https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${countryName}`

    const dataInRedis = await redisClient.get(countryName);
    if (dataInRedis) {
        console.log('Data found in Redis')
        let output = JSON.parse(dataInRedis);
        res.send({ source: 'Redis', output });
    } else {
        console.log('Data Not found in Redis')
        let response = await axios.get(url);
        let output = response.data;
        await redisClient.set(countryName, JSON.stringify(output), { EX: 60*5 });
        console.log('Data Stored in redis')
        res.send({ source: 'API', output });
    }
});

app.listen(5000, async () => {
    console.log('app running at 5000')
});