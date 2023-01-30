var expect = require("chai").expect
var calculate = require("./calculator")

describe("Math Calculator", () =>{
    describe("Addition", () => {
        it("PASS: Correct result (7)", () => {
            var result = calculate.add(5,2)

            expect(result).to.equal(7)
        })
        it("FAIL: Wrong Result (8)", () => {
            var result = calculate.add(5,2)

            expect(result).to.equal(8)
        })
    })

    describe("Subtraction", () => {
        it("PASS: Correct result (3)", () => {
            var result = calculate.sub(5,2)

            expect(result).to.equal(3)
        })
        it("FAIL: Wrong Result (5)", () => {
            var result = calculate.sub(5,2)

            expect(result).to.equal(5)
        })
    })

    describe("Multiplication", () => {
        it("PASS: Correct result (10)", () => {
            var result = calculate.mul(5,2)

            expect(result).to.equal(10)
        })
        it("FAIL: Wrong Result (12)", () => {
            var result = calculate.mul(5,2)

            expect(result).to.equal(12)
        })
    })

    describe("Division", () => {
        it("PASS: Correct result (5)", () => {
            var result = calculate.div(10,2)

            expect(result).to.equal(5)
        })
        it("FAIL: Wrong Result (2)", () => {
            var result = calculate.div(10,2)

            expect(result).to.equal(2)
        })
    })

})