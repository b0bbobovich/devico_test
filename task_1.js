// Create a function that will accumulate in itself and log the result of
// performing calculations that depend on the current accumulated value, as
// well as the new number and operator that were passed to the function.

"use strict";

function accumulateNumber() {
    let accumulatedValue = 0;
    return (number, operator) => {
        switch (operator)
        {
            case "+":
                accumulatedValue += number;
                break;
            case "-":
                accumulatedValue -= number;
                break;
            case "*":
                accumulatedValue *= number;
                break;
            case "/":
                accumulatedValue /= number;
                break;
            default: throw Error(`unsupported operator: ${operator}`)
        };
        console.log(accumulatedValue)

        // Another implementation with using eval() which in this case can be ok
        // const validOperators = ["+", "-", "*", "/"];
        // if (isFinite(number) && validOperators.includes(operator)) {
        //     accumulatedValue = eval(`${accumulatedValue}${operator}${number}`);
        //     console.log(accumulatedValue);
        // }
    }
}
  
const calc = accumulateNumber();

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2