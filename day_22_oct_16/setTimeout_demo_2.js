for (var i = 1; i <= 5; i++) {
    printVal(i)
    console.log('inside loop  ', i)
}
console.log('outside loop ', i)

function printVal(i){
    setTimeout(() => {
        console.log(i)
    }, 1000 * i);
}