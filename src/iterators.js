import { longString } from "./donut";

for (let l of longString) {
  console.log(`the letter is ${l}`);
}

const makeYourObjectIterable = (obj) => {
  return {
    ...obj,
    [Symbol.iterator]: function () {
      var keys = Object.keys(this);
      var index = 0;
      return {
        next: () =>
          index < keys.length
            ? { done: false, value: this[keys[index++]] }
            : { done: true, value: undefined }
      };
    }
  };
};
