//polyfill for apply

Function.prototype.myApply = function (obj, args) {
  obj._this = this;
  console.log("The object is", obj);
  return obj._this(...args);
};

function myCarIs(year, color, horsePower) {
  return `${this.make} ${this.model} ${year} ${color} ${horsePower}`;
}

let car1 = {
  make: "Toyota",
  model: "Camry"
};

console.log("My car is", myCarIs.myApply(car1, ["2019", "Brown", "201 BHP"]));
