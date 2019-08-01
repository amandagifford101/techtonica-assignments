/*function metersToInches(meters) {
    if (isNaN(meters)) {
        return("NaN");
    } else if (Math.sign(meters) == -1) {
        console.log("Please input a non-negative value.");
    }
    return (39.3701 * meters);
}

console.log(metersToInches(9));
console.log(metersToInches(-9));
console.log(metersToInches("j"));


const loopThrough = (num) => {
    if (isNaN(num)) {
        return("NaN");
    } else if (Math.sign(num) == -1) {
        console.log("Please input a non-negative value.");
    }
    for (i = 0; i < num; i++) {
        console.log('Hello World');
    }
    return 1;
}

console.log(loopThrough(9));
console.log(loopThrough(-9));
console.log(loopThrough("string"));

const calculateSum = (num) => {
    var sum = 0;

    if (isNaN(num)) {
        return("NaN");
    } else if (Math.sign(num) == -1) {
        console.log("Please input a non-negative value.");
    }
    for (i=0;i<num;i++) {
        sum += i;
    }
    return sum;
}

console.log(calculateSum(10));
console.log(calculateSum(-50));
console.log(calculateSum("string")); 

function fizzbuzz(x) {
    if (isNaN(x)) {
        return("NaN");
    } else if (Math.sign(x) == -1) {
        console.log("Please input a non-negative value.");
    }
    for(i=0;i<x+1;i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("Fizzbuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

console.log(fizzbuzz("70")); 

const calculateFactorialNumber = (x) => {
    var fact = 1;

    if (isNaN(x)) {
        return("NaN");
    } else if (Math.sign(x) == -1) {
        console.log("Please input a non-negative value.");
    }
    for (i=2;i<x;i++) {
        fact *= i;
    }
    return fact;
}

console.log(calculateFactorialNumber(4.15));

function sleep_in(weekday, vacation) {

    switch(true) {
        case weekday && vacation:
        return true;
         break;
        case vacation:
        return true;
        break; 
        case weekday:
        return false;
    }
} 

console.log(sleep_in(true, false)); 

function comma(array1, array2) {
    if (array1[0] == array2[0] || array1[array1.length - 1] == array2[array2.length - 1]) {
        return true;
    } else {
        return false;
    }
}

console.log(comma([1,2,3], [1,4,9])); */

const serpent = {
    name: "phoenix",
    role: "protector"
}
console.log(serpent);
delete serpent.name; //don't know why the delete keyword isn't working








