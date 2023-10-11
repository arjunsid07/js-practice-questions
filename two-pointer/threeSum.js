const threeSum = (arr, sum) => {
  arr.sort((a, b) => a - b);
  let j, k;
  const result = [];
  for (let i = 0; i < arr.length - 2; ++i) {
    j = i + 1;
    k = arr.length - 1;
    while (j < k) {
      const sumEl = arr[i] + arr[j] + arr[k];
      if (sumEl === sum) {
        result.push([arr[i], arr[j], arr[k]]);
        j++;
        k--;
      } else if (sumEl < sum) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
};

console.log(threeSum([0, -1, 2, -3, 1, -1, 3], -2));
