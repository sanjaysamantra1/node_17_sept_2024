for (var i = 1; i <= 5; i++) {
    setTimeout(console.log, 1000 * i, i);
    console.log('inside loop  ', i)
}
console.log('outside loop ', i)

