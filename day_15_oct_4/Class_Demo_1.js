// Before 2015  (ES-5)
function Trainer(name, course, fee, time) { // constructor function
    this.name = name;
    this.course = course;
    this.fee = fee;
    this.time = time;
}
let trainer1 = new Trainer('sanjay', 'Nodejs', 5000, '8.30AM')
let trainer2 = new Trainer('prakash', 'Data Science', 7000, '6.00AM')
console.log(trainer1)
console.log(trainer2)