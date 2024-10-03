let arr = ['This is javascript class', 'This is Array class'];
// break into individual words

let res1 = arr.map(sentence => sentence.split(' '));
console.log(res1);

let res2 = arr.flatMap(sentence => sentence.split(' '));
console.log(res2);