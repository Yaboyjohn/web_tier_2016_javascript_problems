/** ================================================================================
 *  Return an object with keys as the elements of the array `arr` and index
 *  as the values
 *
 *  {param} arr - Array
 *
 *  Example:
 *  if `arr = ['dog', 'cat'];` then
 *  questions3(arr); // returns {dog: 0, cat: 1}
 *  ================================================================================ */
var question3 = function(arr) {
  var answer = {};
  for (var i = 0; i < arr.length; i ++) {
    answer[arr[i]] = i;
  }
  return answer;
}


/** ================================================================================
 *  Don't touch anything below here!
 *  ================================================================================ */
var exampleArr = ['dog', 'cat'];
module.exports = question3;
