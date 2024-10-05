// there is no pre-defined method which returns dayName
Date.prototype.getDayName = function () {
    let dayNames = ['sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNumber = this.getDay();
    return dayNames[dayNumber];
}

let today = new Date();
console.log(today.getDate());
console.log(today.getMonth() + 1);
console.log(today.getFullYear());

console.log(today.getDay()); // 6
console.log(today.getDayName()); // Saturday
