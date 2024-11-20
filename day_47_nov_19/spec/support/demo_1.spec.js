const { fibonacci, isPrime, repeat, fetchData } = require("../../demo_1");

describe('This is test suite for demo-1 file', () => { // test suite
    beforeAll(() => { // 1
        console.log('Before All');
        // initialize a variable only 1
    })
    beforeEach(      // 3 times , as 3 it()
        () => {
            console.log('Before Each')
        }
    )
    afterEach(   // 3 times , as 3 it()
        () => {
            console.log('after each')
        }
    )
    afterAll(  // 1
        () => {
            console.log('after All')
        }
    )

    it('it should verify fibonacci method', () => { // test case
        console.log('It-1')
        expect(fibonacci(2)).toEqual([0, 1, 1]);
        // expect(actual).matcher(expected);
        expect(fibonacci(1)).toEqual([0, 1]);
        expect(fibonacci(3)).toEqual([0, 1, 1, 2]);
    })
    it('it should verify isPrime method', () => {
        console.log('It-2')
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(3)).not.toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(8)).not.toBe(true);
        expect(isPrime(8)).not.toBeTruthy();
        expect(isPrime(8)).toBeFalsy();
    })
    // truthy values : 5 , -5 , 'sachin' , true , [] , {}
    // falsy values : 0 , '' , undefined, null , false 
    it('it should verify repeat method', () => {
        console.log('It-3')
        expect(repeat('abc', 2)).toBe('abcabc');
        expect(repeat('ab', 3)).toBe('ababab');
    })

    it('it should verify fetchData method', async () => {
        let response = await fetchData('https://jsonplaceholder.typicode.com/users');
        let users = await response.json()
        expect(users.length).toBe(10);
    });

});