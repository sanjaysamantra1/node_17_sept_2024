async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let finalData = await response.json();
        console.log(finalData)
    } catch (err) {
        console.log(err);
    }
}
fetchUsers();