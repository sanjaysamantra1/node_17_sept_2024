require('dotenv').config();

const envInfo = process.env.NODE_ENV

if (envInfo === 'development') {
    console.log('connecting to dev Database')
} else if (envInfo === 'qa') {
    console.log('connecting to qa Database')
} else {
    console.log('connecting to prod Database')
}