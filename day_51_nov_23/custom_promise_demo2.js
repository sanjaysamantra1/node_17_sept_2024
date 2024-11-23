// create a custom promise to add 2 numbers
// addition result should be returned after 1 sec
// add validation, if both the inputs are not number, throw error

function addition(a, b) {
    let additionPromise = new Promise((resolve, reject) => {
        if (isNaN(a) || isNaN(b)) {
            reject('Both the Inputs should be numbers')
        } else {
            setTimeout(() => {
                resolve(`Addition of ${a} & ${b} is ${a + b}`);
            }, 1000);
        }
    })
    return additionPromise;
}
addition(2, 3).then(
    (res) => { console.log(res) },
    (err) => { console.log(err) }
)
addition(2, 'sachin').then(
    (res) => { console.log(res) },
    (err) => { console.log(err) }
)
