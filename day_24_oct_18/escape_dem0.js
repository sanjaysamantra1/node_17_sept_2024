const querystring = require('querystring');

let queryStr = 'name=sanja?+ysamantra&color=dark blue';
console.log(queryStr);


// escape the str
let escapedQueryStr = querystring.escape(queryStr);
console.log(escapedQueryStr);

let originalQueryStr = querystring.unescape(escapedQueryStr);
console.log(originalQueryStr)





