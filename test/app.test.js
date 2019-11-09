const fizzBuzz = require('../index');

describe('My Fizz Buzz Test') = () => {
    it ("should return number"), () => {
        expect(fizzBuzz.fizzBuzz(1)).toBe(1);
    };

    test('should return "Fizz" when passed a mulitple of 3'), ()=>{
        expect(fizzBuzz(3)).toEqual('Fizz');
    }

    test('should return "Buzz" when passed a mulitple of 5'), () => {
        expect(fizzBuzz(5)).toEqual('Buzz');
    }

    test('should return "Prime" when passed a prime number'), () => {
        expect(fizzBuzz(2)).toEqual('Prime');
    }

    test('should return value when no conditions match'), () => {
        expect(fizzBuzz(17)).toEqual(17);
    }
    afterAll(() => {
        console.log('tests complete')
    })
}