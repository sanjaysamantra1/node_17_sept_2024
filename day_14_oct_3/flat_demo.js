let arr = [10, 20, [30, [40, [50, [60, [70, 80, [90, [100]]]]]]]];
console.log(arr.length); // 3

let res1 = arr.flat();
console.log(res1.length); // 4

let res2 = arr.flat(2);
console.log(res2.length); // 5

let res3 = arr.flat(Infinity);
console.log(res3.length); // 



