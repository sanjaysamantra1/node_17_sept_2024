let arr1 = [50, 30, 40, 20, 10];
arr1.sort()
console.log(arr1);

let arr2 = [95, 8, 9, 101, 105, 7, 101, 94, 87, 10, 14];
arr2.sort();    // not numeric sort, string sort
console.log(arr2)

// To perform Numeric sort, sort(comapreFn)
arr2.sort((a, b) => a - b); // asc sort
// arr2.sort((a,b)=>b-a); // desc sort
console.log(arr2)

