// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code. 
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.


// Exercise 1. Make an empty array named animals
console.log("Problem 1 **********************************************")
var animals = [];

// Exercise 2. Add the string "frog" to the array
console.log("Problem 2 **********************************************")
animals.push("frog");

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
console.log("Problem 3 **********************************************")
animals.push("pony", "dog", "panda", "gorilla");
console.log(animals)

// Exercise 4. Update the first item in the array to be "gorilla"
console.log("Problem 4 **********************************************")
animals.unshift("gorilla");
console.log(animals);

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log("Problem 5 **********************************************")
console.log(animals.length);

// Exercise 6. Print the first item in the array
console.log("Problem 6 **********************************************")
var firstItem = animals[0];
console.log(firstItem);
// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log("Problem 7 **********************************************")
var len = animals.length;
var lastItem = animals[len];
console.log(lastItem);
// Exercise 8. Remove the last item from the array
console.log("Problem 8 **********************************************")
lastItem = animals.pop();
console.log(lastItem);

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
console.log("Problem 9 **********************************************")
var assortedThings = ["This", "is", "an", "array"];
console.log(assortedThings);

// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...

console.log("Problem 10 **********************************************")

for(i = 0; i < assortedThings.length; i++) {
    console.log("Item #0 is " + assortedThings[i]);
}

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array, 
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if 
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
console.log("Problem 11 **********************************************")
function checkArray(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            console.log("BIG");
        }
        else if (0 < arr[i] < 100) {
            console.log("small");
        }
        else if (arr[i] < 0) {
            console.log("negative");
        }
    }
}

checkArray([5, 100, 101, 67, -24]);


// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.
var humanIndex = {name: "Amanda", favoriteAnimal: "panda", favoriteNumber: 101}
console.log(humanIndex);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
humanIndex.favoriteFood = "Thai";
humanIndex.favoriteColor = "Teal";
console.log(humanIndex);
// Exercise 14. Update the favoriteAnimal value to something different
humanIndex.favoriteAnimal = "puppy";
console.log(humanIndex);

// Exercise 15. Print the value of favoriteAnimal. 
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(humanIndex.favoriteAnimal);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you? 
// Please answer in a comment below.
//

// Email your file to the course staff, 