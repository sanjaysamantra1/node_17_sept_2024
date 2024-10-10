function sumOfDigit(num) {
    let sum = 0;
    while (num != 0) {
        let rem = num % 10;
        sum = sum + rem;
        num = parseInt(num / 10);
    }
    return sum;
}
let input = 125;
let res = sumOfDigit(input);
console.log(`Sum of all digits for the number ${input} is ${res}`)