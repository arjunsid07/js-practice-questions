Array.prototype.myFindIndex = function (callBack) {
  for (let index = 0; index < this.length; ++index) {
    if (callBack(this[index])) return index;
  }
};

const arr = [1, 2, 3, 4, 5];

console.log(arr.myFindIndex((el) => el === 3));
