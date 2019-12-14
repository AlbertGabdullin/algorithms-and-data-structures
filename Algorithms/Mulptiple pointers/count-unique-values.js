/* Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
  There can be negative numbers in the array, but it will always be sorted.
  Time complexity: O(n);
  Space complexity: O(n);
 */

function countUniqueValues(arr){
  if(arr.length === 0) return 0;
  let first = 0;
  let second = 1;
  while(second < arr.length) {
    if(arr[first] !== arr[second]) {
      first++;
      const temp = arr[first];
      arr[first] = arr[second];
      arr[second] = temp;
    }
    second++;
  }
  return first + 1;
}

