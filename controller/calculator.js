const { add, subtract, getTime } = require('../service/calculator');

class Calculator {
    constructor() {
        this.counter = 0;
        this.lastCalulationTimeInSeconds = 0;
    }

    /**
     * 
     * @param {value to increment with} value 
     */
    increment = (value) => {
        const startTime = getTime();
        this.counter = add(this.counter, value);
        const endTime = getTime();
        this.lastCalulationTimeInSeconds = (endTime - startTime);
    }

    /**
    * 
    * @param {value to decrement with} value 
    */
    decrement = (value) => {
        const startTime = getTime();
        this.counter = subtract(this.counter, value);
        const endTime = getTime();
        this.lastCalulationTimeInSeconds = (endTime - startTime);
    }

    reset = () => {
        this.counter = 0;
        this.lastCalulationTimeInSeconds =0;
    }

    getCurrentCounterValue = ()=>{
        return this.counter;
    }

    getLastCalulationTimeInSeconds = ()=>{
        return this.lastCalulationTimeInSeconds;
    }
}

module.exports = Calculator;