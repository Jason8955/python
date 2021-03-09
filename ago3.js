/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) 
  containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
 */


const expected1 = {
  abc: 42,
  3: "wassup",
  yo: true,
};

/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @return {Object} The object with the given keys and values.
 */
const keys1 = ["abc", 3, "yo"];
const vals1 = [42, "wassup", true];

function zipArraysIntoMap(keys, values){ //
  var Myobj = {}
  for (var i = 0; i < keys.length; i++){
    console.log(keys[i], values[i]);


    Myobj[keys[i]] = values[i]; 
  }
  return Myobj;
};

console.log(zipArraysIntoMap(keys1, vals1));


module.exports = { zipArraysIntoMap };

/*****************************************************************************/


/* 
  Invert Hash
  A hash table / hash map is an obj / dictionary
  Given an object / dict,
  return a new object / dict that has the keys and the values swapped 
  so that the keys become the values and the values become the keys
*/

const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
const expected1 = { Zaphod: "name", high: "charm", dicey: "morals" };

for (var key in obj1) {
  console.log(key);
}

/**
 * Inverts the given object's key value pairs so that the original values
 * become the keys and the original keys become the values.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object<string, string>} obj An object with string keys and string values.
 * @return The given object with key value pairs inverted.
 */
function invertObj(obj) {}

module.exports = { invertObj };

/*****************************************************************************/
const obj1 = { name: "Zaphod", charm: "high", morals: "dicey" };
function invertObj(obj){
    newObj= {};
    for(let key in obj1){
        newObj[obj[key]] = key;
    }
    return newObj
}
func = invertObj(obj1);
console.log(func);