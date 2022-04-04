// polyfill for map

Array.prototype.myMap = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

let arr = [-1, 22, 33, -78, 33, 13, -34];

console.log(
  "Five times array is",
  arr.myMap((ele, idx) => ele * 5 + idx)
);
