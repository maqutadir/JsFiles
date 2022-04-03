// polyfill for filter

Array.prototype.myfilter = function (callback) {
  const newArr = [];
  for (let i of this) {
    const result = callback(i);
    if (result) {
      newArr.push(i);
    }
  }
  return newArr;
};

let arr1 = [2, 3, 5, 4, -1, -88, 92, -300, 0];

let filteredArr = arr1.myfilter((ele) => ele > 0);

console.log("Filtered array is", filteredArr);
