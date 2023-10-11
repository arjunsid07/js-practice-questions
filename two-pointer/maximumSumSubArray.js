function maxSubArraySum(arr, size) {
  let max = a[0];
  let curr_max;

  for (let i = 1; i < size; i++) {
    curr_max = Math.max(arr[i], curr_max + arr[i]);
    max = Math.max(max, curr_max);
  }

  return max;
}

console.log(maxSubArraySum([-2, -3, 4, -1, -2, 1, 5, -3]));
