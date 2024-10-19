const dotenv = require('dotenv');
dotenv.config();
const { add,PI } = require('./Math')

console.log(process.env.PORT)
console.log(process.env.DB_URL)
console.log(process.env.USER_ID)
console.log(process.env.NODE_ENV)

console.log(add(2, 3));
console.log(`PI value is ${PI}`);