/* Given two strings, write a function to determine if the second string is an anagram of the first.
An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
Note: You may assume the string contains only lowercase alphabets.
*/

function validAnagram(first, second) {
  if(first.length !== second.length) {
    return false;
  }
  if(first.length === 0 && second.length === 0) return true;
  const firstToObj = getStringCharsCount(first);
  const secondToObj = getStringCharsCount(second);

  let flag = false;

  for(let key in firstToObj) {
    if(firstToObj[key] === secondToObj[key]) {
      flag = true;
    } else {
      flag = false;
    }
  }
  return flag;
}

function getStringCharsCount(str) {
  const strArr = str.slice('');
  const strObj = {};
  for(let key of strArr) {
    strObj[key] = (strObj[key] || 0) + 1;
  }

  return strObj;
}