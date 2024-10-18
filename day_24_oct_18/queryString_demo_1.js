const url = require('url');
const querystring = require('querystring');

let str = 'https://example.com/path/to/page?name=ferret&color=purple';

// fetch only the query String from a complete url
let queryStr = url.parse(str).query;
console.log(queryStr); // name=ferret&color=purple

// convert query string to object
let queryObj = querystring.parse(queryStr);
console.log(queryObj);

// convert query object to string
console.log(querystring.stringify(queryObj))




