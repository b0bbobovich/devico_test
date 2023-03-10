
// Write a function that replaces all ones with zeros and vice versa for the
// object

"use strict";

function foo(object) {
    for (const key in object) {
        if (object[key] === 1) {
            object[key] = 0;
        }
        else if (object[key] === 0) {
            object[key] = 1;
        }
        else if (typeof object[key] === "object") {
            foo(object[key]);
        }
    }
};

const d = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
};
    
foo(d);
console.log(d);
    
// {
//     left: {
//         left: {
//             left: 0,
//             right: {
//                 left: 1,
//                 right: 0,
//             },
//         },
//         right: {
//             left: 1,
//             right: 0,
//         },
//     },
//     right: 0,
// };




