const Calculator  = require('../controller/calculator');

describe('test to see if Calculator meets requirment', () => {

    let calculatorObj;
    beforeAll(() => {
        calculatorObj = new Calculator();
    });
    afterAll(() => {
        calculatorObj.reset()
    });

    test("test calculator counter and last Calulation time taken before any calculation", () => {
        expect(calculatorObj.getCurrentCounterValue()).toBe(0);
        expect(calculatorObj.getLastCalulationTimeInSeconds()).toBe(0);
    })

    test("test calculator counter after increment", () => {
        calculatorObj.increment(210);
        expect(calculatorObj.getCurrentCounterValue()).toBe(210);
    })

    test("test calculator counter after decrement", () => {
        calculatorObj.decrement(101);
        expect(calculatorObj.getCurrentCounterValue()).toBe(109);
    })

    test("test calculator last Calulation time taken", () => {
        expect(calculatorObj.getLastCalulationTimeInSeconds()).toBeGreaterThanOrEqual(0);
    })

    test("test calculator reset", () => {
        calculatorObj.reset();
        expect(calculatorObj.getCurrentCounterValue()).toBe(0);
        expect(calculatorObj.getLastCalulationTimeInSeconds()).toBe(0);
    })
});

