import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    
    let main = new Main();

    it("1 => 1", function() {

        let result = main.fizzByzz(1);

        expect(result).toBe(1);
    });

    it("2 => 2", function() {

        let result = main.fizzByzz(2);

        expect(result).toBe(2);
    });

    it("3 => Fizz", function() {

        let result = main.fizzByzz(3);

        expect(result).toBe("Fizz");
    });
    
});

