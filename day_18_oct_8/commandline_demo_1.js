const args = process.argv.slice(2);
console.log(args); // args is an array and not an object

let obj = {};
for(ele of args){
    let [key,val] = ele.split('=');
    obj[key] = val;
}
console.log(obj); // obj has data in  object format

// node .\commandline_demo_1.js name=sanjay add=bangalore age=50