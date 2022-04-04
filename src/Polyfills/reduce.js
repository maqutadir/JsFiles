Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue === undefined ? undefined : initialValue;
  for (let i = 0; i < this.length; i++) {
    if (acc) {
      acc = callback.call(undefined, acc, this[i], i, this);
      console.log("Acc is", acc);
    } else {
      acc = this[i];
    }
  }
  return acc;
};

let arr = [-1, 22, 33, -78, 33, 13, -34];

console.log(
  "The summed array is",
  arr.myReduce((acc, ele) => acc + ele, 108)
);
