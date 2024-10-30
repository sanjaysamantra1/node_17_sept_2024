const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors()); // cors middleware

app.engine('pug', require('pug').__express)
app.set('views', './views')
app.set('view engine', 'pug');

const users = ['Raghuvansh', 'Subhadda', 'Simran', 'Sainath', 'Vamsi']

app.get('/', (req, res, next) => {
    res.render("index")
});
app.get('/users', (req, res, next) => {
    res.render("users", {users})
});

app.listen(5001, () => {
    console.log('app running at 5001')
});