let arr = [10, 20, 30, 40, 50];
// find the su of all these numbers
let sum = arr.reduce((sum, curr) => {
    console.log(sum, curr)
    return sum + curr;
}); // passing default value is not mandatory
console.log(sum)

let arr2 = [10, 20, 10, 30, 30, 40];
// find the occurance of each element: {10:2,20:1,30:2,40:1}
let res = arr2.reduce((res, curr) => {
    res[curr] = res[curr] ? res[curr] + 1 : 1;
    return res;
}, {}); // here default value has to be passed
console.log(res)
