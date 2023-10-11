const twoSum = (arr, sum) => {
  arr.sort((a, b) => a - b); // [2,3,5,8,11]
  let i = 0;
  let j = arr.length - 1;
  let sumEl = 0;
  while (i < j) {
    sumEl = arr[i] + arr[j];
    if (sumEl === sum) {
      break;
    } else if (sumEl < sum) {
      i++;
    } else {
      j--;
    }
  }
  if (sumEl === sum) {
    return [i, j];
  }
  return [];
};

console.log(twoSum([3, 5, 2, 8, 11], 10));
