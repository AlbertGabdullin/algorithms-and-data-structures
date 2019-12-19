// Merge Sort algorithm on Javascript
function merge(arr1, arr2, comparator) {
  let result = [], i = 0, j = 0;

  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftPart = mergeSort(arr.slice(0, mid));
  let rightPart = mergeSort(arr.slice(mid));
  return merge(leftPart, rightPart);
}