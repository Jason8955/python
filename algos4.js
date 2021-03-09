/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @return {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {

}

module.exports = { stringDedupe };





function stringDedupe(str) {
    let result = '';
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) < 0) {
        result += str[i];
      }
    }
    return result;
  }
  console.log(stringDedupe('hellooo'));



  function reverseWordOrder(str) {
    var result = "";
    for( let i = str.length -1; i >= 0; i--){
        result += str.wordAt(i);
    }
return result;

}
console.log(reverseWordOrder('This is a test'));

function reverseString(input)
{
    var output = "";
    for(var i = input.length - 1; i >= 0; i--) {
        output +=  input[i];
    }
    return output;
}  
console.log(reverseString('hello world'))

    