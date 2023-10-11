/**
 * Array intersection contiguos
 */
const contiguosIntersection = (arr1, arr2) => {
  let ptr1 = 0;
  let ptr2 = 0;
  let maxLen = 0;
  let startIndex;
  let endIndex;
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    let len = 0;
    if (arr1[ptr1] === arr2[ptr2]) {
      while (
        ptr1 < arr1.length &&
        ptr2 < arr2.length &&
        arr1[ptr1] === arr2[ptr2]
      ) {
        ptr1++;
        ptr2++;
        len++;
      }
      if (len > maxLen) {
        maxLen = len;
        startIndex = ptr1 - maxLen;
        endIndex = startIndex + maxLen - 1;
      }
    } else if (arr1[ptr1] < arr2[ptr2]) {
      ptr1++;
    } else {
      ptr2++;
    }
  }
  return {
    maxLen,
    arr: arr1.slice(startIndex, endIndex + 1),
  };
};

console.log(contiguosIntersection([1, 3, 4, 5, 7], [2, 3, 4, 5, 6]));

/**
 * Array intersection non-contiguos
 */
const noncontiguosIntersection = (arr1, arr2) => {
  let ptr1 = 0;
  let ptr2 = 0;
  let common = [];
  while (ptr1 < arr1.length && ptr2 < arr2.length) {
    let len = 0;
    if (arr1[ptr1] === arr2[ptr2]) {
      common.push(arr1[ptr1]);
      ptr1++;
      ptr2++;
    } else if (arr1[ptr1] < arr2[ptr2]) {
      ptr1++;
    } else {
      ptr2++;
    }
  }
  return common;
};

console.log(noncontiguosIntersection([1, 3, 4, 5, 7], [2, 3, 5, 6]));
