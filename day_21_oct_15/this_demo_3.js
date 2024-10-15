let user = {
    fName: 'Sachin',
    lName: 'Tednulkar',
    printName1: function () {
        console.log(this.fName + this.lName)
    },
    printName2: () => {
        console.log(this.fName + this.lName)
    }
}
user.printName1();
user.printName2();