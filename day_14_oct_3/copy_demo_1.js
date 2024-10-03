let arr1 = [10, 20];
let arr2 = arr1;    // Reference / Address Copy
arr2.push(30);
console.log(arr1)
console.log(arr2)

let arr3 = [100, 200, [300, 301]];
let arr4 = [...arr3]; // shallow copy:copy value
arr4.push(400);     // 400 wont be seen in arr3
arr4[2].push(302);  // 302 will be seen in arr3
console.log(arr3)
console.log(arr4)

let arr5 = [100, 200, [300, 301]];
let arr6 = structuredClone(arr5); // deep copy:copy value
arr6.push(400);     // 400 wont be seen in arr5
arr6[2].push(302);  // 302 wont be seen in arr5
console.log(arr5)
console.log(arr6)


