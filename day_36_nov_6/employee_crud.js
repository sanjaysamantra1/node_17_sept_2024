const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function connectToDB() {
    await client.connect();
    console.log('Database connection established')
}

app.get('/employees', async (req, res) => {
    try {
        let employees = await client.db('sept_2024').collection('employees').find({}).toArray();
        res.json(employees);
    } catch (err) {
        console.log(err);
    }
})
app.get('/employees/:id', async (req, res) => {
    const empId = +req.params.id;
    try {
        let employees = await client.db('sept_2024').collection('employees').find({ eId: empId }).toArray();
        res.json(employees[0]);
    } catch (err) {
        console.log(err);
    }
})
app.post('/employees', async (req, res) => {
    const newEmp = req.body;
    try {
        let insertResponse = await client.db('sept_2024').collection('employees').insertOne(newEmp)
        res.json(insertResponse);
    } catch (err) {
        console.log(err);
    }
})
app.patch('/employees/:id', async (req, res) => {
    const empId = +req.params.id;
    const payload = req.body;
    try {
        let updateResponse = await client.db('sept_2024').collection('employees').updateOne({ eId: empId }, { $set: payload }, { upsert: true });
        res.json(updateResponse);
    } catch (err) {
        console.log(err);
    }
})
app.delete('/employees/:id', async (req, res) => {
    const empId = +req.params.id;
    try {
        let deleteResponse = await client.db('sept_2024').collection('employees').deleteOne({ eId: empId });
        res.json(`Employee ${empId} Deleted Succesfully!!!`);
    } catch (err) {
        console.log(err);
    }
})

app.listen(5000, async () => {
    await connectToDB();
    console.log('app running at 5000')
});

