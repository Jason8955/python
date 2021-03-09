algos

Swap String For Array Negative Values
SwapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative values with the string 'Dojo'.



// Create a function that takes in an array
// Loop through the array
// As you go through the array replace any negative values with Dojo
// check your answer in console.

// group 2 // define the function, accepts two parameters- array and a number // initialize variable for counter 
// iterate through the array // set if statement that checks if arr[i]>number //     if yes, counter increases by 1 // return counter  // call function


function func(arr, num){
    
    counter =0;
    for(i=0; i < arr.length; i++){
        if (arr[i] > num){
        counter++;
        }
    }
    return counter;
}
console.log(func([1,2,10], 5));
/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

 const str1 = "a x a";
// const expected1 = true;

 const str2 = "racecar";
// const expected2 = true;

 const str3 = "Dud";
// const expected3 = false;

 const str4 = "oho!";
// const expected4 = false;

// /**
//  * Determines if the given str is a palindrome (same forwards and backwards).
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {string} str
//  * @return {boolean} Whether the given str is a palindrome or not.
//  */
function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
  console.log(checkPalindrom(str4))
module.exports = { isPalindrome };

/*****************************************************************************/