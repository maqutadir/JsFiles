// polyfill for currying

function curry(func) {
  return function curried(...args) {
    console.log("Args are", args);
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        console.log("Args2 are", args2);
        return curried.apply(this, [...args, ...args2]);
      };
    }
  };
}

const sum = (a, b, c) => a + b + c;

let curriedSum = curry(sum);

console.log("Curried sum is", curriedSum(1)(2)(3));
