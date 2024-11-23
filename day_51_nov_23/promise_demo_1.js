let res1 = Math.max(10, 20, 30); // max() returns a value/number
console.log(res1);

// fetch() returns a promise Object
let usersPromise = fetch('https://jsonplaceholder.typicode.com/users');
console.log(usersPromise);

// then(successHandler,errorHandler)
usersPromise.then(
    (response) => {
        console.log(response);
        let jsonPromise = response.json();
        jsonPromise.then(
            (finalData) => {
                console.log(finalData)
            },
            (err) => {
                console.log(err)
            }
        )
    },
    (error) => {
        console.log(error)
    },
)