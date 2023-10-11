/**
 * Two Pointers - can be done through DP also
 */
const longestPalindrome = (str) => {
  let maxPalin = "";
  for (let i = 0; i < str.length; ++i) {
    // Odd Case
    let j = i - 1;
    let k = i + 1;
    while (j >= 0 && k < str.length && str[j] == str[k]) {
      let subStr = str.substring(j, k + 1);
      if (subStr.length > maxPalin.length) {
        maxPalin = subStr;
      }
      j--;
      k++;
    }
    // Even Case
    j = i;
    k = i + 1;
    while (j >= 0 && k < str.length && str[j] == str[k]) {
      let subStr = str.substring(j, k + 1);
      if (subStr.length > maxPalin.length) {
        maxPalin = subStr;
      }
      j--;
      k++;
    }
  }
  return maxPalin;
};

console.log(longestPalindrome("sbaabsaz"));
