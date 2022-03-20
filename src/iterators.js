import { longString, textObj } from "./donut";

for (let l of longString) {
  //console.log(`the letter is ${l}`);
}

const makeYourObjectIterable = (obj) => {
  return {
    ...obj,
    [Symbol.iterator]: function () {
      console.log("This in object is", this);
      var keys = Object.keys(this);
      var index = 0;
      return {
        next: () =>
          index < keys.length
            ? { done: false, value: keys[index++] }
            : { done: true, value: undefined }
      };
    }
  };
};

console.log("Text Object is", textObj);
const newObj = makeYourObjectIterable(textObj);
console.log("New object is", [...newObj]);

let count = 1;
for (let property of newObj) {
  //count++;
  console.log(`Property ${count} is: ${property} `);
}

//creating an iterator using generator
function* simpleGenerator(type) {
  let count = 2;
  while (true) {
    //yield Math.pow(count, 2);
    //console.log("Yielded");
    var a = yield count;
    //console.log("Incremented");
    a ? (count += a) : count++;
    console.log("count is", a);
  }
  yield 20;
}

function genratorDemo() {
  const gen1 = simpleGenerator("square");
  console.log(gen1.next(12));
  console.log(gen1.next(100));
  console.log(gen1.next(22));
  console.log(gen1.next(33));
  console.log(gen1.next(99));
  console.log(gen1.next(32));
  console.log(gen1.next(39));
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
  console.log(gen1.next());
}
