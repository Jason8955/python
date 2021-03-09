/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};


array   = ["a", "b", "a", "c", "B", "c", "c", "d"]
function func(array){
result = { };
for(var i = 0; i < array.length; ++i) {
    if(!result[array[i]])
        result[array[i]] = 0;
    ++result[array[i]];
}
return result
}
console.log(func(array));









/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @return {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {}

module.exports = { frequencyTableBuilder };


/* 
  Reverse Word Order
  Given a string of words (with spaces)
  return a new string with words in reverse sequence.
*/

const str1 = "This is a test";
const expected1 = "test a is This";

/**
 * Reverses the order of the words but 
 * not the words themselves form the given
 * string of space separated words.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string containing space separated words.
 * @return {string} The given string with the word order reversed but the words
 *    themselves are not reversed.
 */
function reverseWordOrder(str) {
    var result = "";
    for( let i = str.length -1; i >= 0; i--){
        result += str.wordAt(i);
    }
return result;

}
console.log(reverseWordOrder('This is a test'));




function func(str) {
    var result = "";
        var wordArray = str.split(" ");
        for(var i = wordArray.length - 1; i >= 0; i--) {
            result += wordArray[i] + " ";
        }
        return result.trim();
    }


console.log(func('This is a test'))
