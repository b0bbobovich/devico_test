// Make a function that takes a number n, and returns a two-dimensional
// array with length n*n, with 2 on the diagonal and 1 on the top and bottom of
// the resulting segment

"use strict";

function bar(length) {
    let arr2D = []; 
    for (let row = 0; row < length; row++) {
        arr2D.push([])
        for (let col = 0; col < length; col++) {
            const rightDiagonal = col === length - row - 1;
            const leftDiagonal = row === col;
            const upperCenter = col > row && col < length - row - 1;
            const lowerCenter = col < row && col > length - row - 1;
            let value = 0;
            if (leftDiagonal || rightDiagonal) {
                value = 2;
            }
            else if (upperCenter || lowerCenter) {
                value = 1;
            }
            arr2D[row].push(value);
        } 
    };
    return arr2D;
};
    
console.log(bar(5))
/*[
[2,1,1,1,2],
[0,2,1,2,0],
[0,0,2,0,0],
[0,2,1,2,0],
[2,1,1,1,2],
]
*/
console.log(bar(4))
/*[
[2,1,1,2],
[0,2,2,0],
[0,2,2,0],
[2,1,1,2],
]
*/
