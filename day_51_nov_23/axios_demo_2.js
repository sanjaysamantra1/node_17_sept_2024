const axios = require('axios')

async function getData(){
    let usersArr = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(usersArr)
}
getData()