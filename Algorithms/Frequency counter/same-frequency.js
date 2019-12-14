/*
* Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
* Your solution MUST have the following complexities:
* Time: O(N)
* */

function sameFrequency(a, b){
  const aArr = a+''.split('');
  const bArr = b+''.split('');
  const aObj = arrToObj(aArr);
  const bObj = arrToObj(bArr);

  let flag = false;
  for(let key in aObj) {
    if(aObj[key] === bObj[key]) {
      flag = true;
    } else {
      return false;
    }
  }
  for(let key in bObj) {
    if(bObj[key] === aObj[key]) {
      flag = true;
    } else {
      return false;
    }
  }

  return flag;
}

function arrToObj(arr) {
  const obj = {};
  for(let key of arr) {
    obj[key] = (obj[key] || 0) + 1;
  }
  return obj;
}