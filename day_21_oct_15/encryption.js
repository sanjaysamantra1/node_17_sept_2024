let str = 'Hello, Good Morning';

let encryptedStr = btoa(str);
console.log(encryptedStr);

let originalStr = atob(encryptedStr);
console.log(originalStr)