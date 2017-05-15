// This function takes a single input, called listOfNums, which will be an Array
// numbers. The last line of the function to run must return an Array of the
// numbers from listOfNums, except those that are 10 or greater.

// All of your code should go inside this function's { and } braces.

function numberFilterer(listOfNums){
    // listOfNums - [2, 4, 19]
    // compare each item in the array to the number 10
    var returnArray = [];
    
    for (counter = 0; counter < listOfNums.length; counter++) { 
        if (listOfNums[counter] < 10) {
            returnArray.push(listOfNums[counter]);
        }
    }
    
    return returnArray;
    // if it is less than 10, collect the item in a separate array to be returned
    // once we have compared all of the items, return the array with items less than 10
}

// Below, you'll find the code that checks for correctness of your work.

// Do feel free to read it. It can help you get a clearer understanding of
// what your function should do.

// BUT DO NOT MODIFY THE BELOW CODE AT ALL.

var testInput1 = [30, 5, 9, 10, 11];
var result1    = numberFilterer(testInput1);

var testInput2 = [0, 10, 10, 9, 9, 8];
var result2    = numberFilterer(testInput2);

if (result1.sort().toString() === [5, 9].toString()){
    console.log("Test #1 Passed!");
}
else {
    console.log("Test #1 Failed!");
    console.log("Tried with [30, 5, 9, 10, 11]");
    console.log("Expected to get: 5,9");
    console.log("Instead, got: " + result1);
}

console.log("\nMoving onto Test #2...\n");

if (result2.sort().toString() === [0, 8, 9, 9].toString()){
    console.log("Test #2 Passed!");
}
else {
    console.log("Test #2 Failed!");
    console.log("Tried with [0, 10, 10, 9, 9, 8]");
    console.log("Expected to get: 0,8,9,9");
    console.log("Instead, got: " + result2);
}