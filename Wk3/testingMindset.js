Exercises:

/* 1) A function that takes in two numbers and returns true if the first 
number is larger than the second number. Otherwise, it should return false. */
function greaterNum(num1, num2) {
    if (num1 > num2) {
        return true;
    } else {
        return false;
    }
}

console.log(greaterNum(1, 5)); // Expected false output; Making sure if else statement 
                        //functioning properly in reference to else.
console.log(greaterNum(5, 1)); //Expected true output; Checking if else conditional.

console.log(greaterNum(-1, -3)); //Checking if function compat. with negative input.

console.log(greaterNum(4, 4)); //Checking if function compat. with equal input.

console.log("*************************************");

/* 2) A function that takes in an array of numbers, and returns the third 
number in the array. */

function thirdElement(arr) {
    for (i=0;i<arr.length;i++) {
        if (i=2) {
            return arr[i];
        }
    }
}

console.log(thirdElement([1, 2, 3, 4, 5])); //Making sure array working properly with normal array.

console.log(thirdElement([])); // Testing an empty array to see what happens;

console.log(thirdElement(3)); // Testing a non-array input;

console.log("*************************************");

/* 3) A function that takes 3 numbers as parameters. The 3 parameters are 
called min, max, and target. Return whether target number is between the 
min and the max (inclusive). */

function inBetween(min, max, target) {
    if (min<=target<=max) {
        return true;
    }
    else {
        return false;
    }
}

console.log(inBetween(1,1,2)); // Testing with equivalent max and min values

console.log(inBetween(undefined, 1, 2)); // Testing with undefined value in input;
// This is weird that the output comes out to be true... ???
console.log(inBetween(3, null, 4)); // Testing with null value at input;

console.log("*************************************");

/* 4) A function that takes in a number, and prints the word "Hello" that many 
times. */

function printHellos(num) {
    for(i=0; i<num.length;i++) {
        console.log('Hello');
    }
}

printHellos(NaN); // Checking NaN as input;
//Cannot read property length of NaN
printHellos(null); //checking null as input;
//Cannot read property length of null
printHellos([1,4,5,6]); //checking array as input;
