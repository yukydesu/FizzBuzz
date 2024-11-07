import { Main } from '../src/app.js';

describe("A suite of test for the demo function of the main class", function() {
    
    // arrange
    let main = new Main();

    it("1 => 1", function() {
        // act
        const result = main.fizzByzz(1);

        // assert
        expect(result).toBe("1");
    });

    it("2 => 2", function() {

        const result = main.fizzByzz(2);

        expect(result).toBe("2");
    });

    it("3 => Fizz", function() {

        const result = main.fizzByzz(3);

        expect(result).toBe("Fizz");
    });
    
});

