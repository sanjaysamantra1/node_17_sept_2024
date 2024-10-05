class Student {
	constructor(roll, name, add) {
		this.roll = roll;
		this.name = name;
		this.add = add;
	}
}
Student.prototype.clgName = 'nareshIT';
let std1 = new Student(101, 'raghuvansh', 'noida');

console.log('name' in std1); // true
console.log(std1.hasOwnProperty('name')); // true

console.log('clgName' in std1); // true
console.log(std1.hasOwnProperty('clgName')); // false

console.log('dob' in std1); // false
console.log(std1.hasOwnProperty('dob')); // false

// in - checks direct properties and prototype properties
// hasOwnProperty - checks only direct properties
