let myPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hellooo, Response From Promise!!!')
    }, 2000)
})

myPromise1.then(
    (response) => { console.log(response) },
    (error) => { console.log(error) },
)