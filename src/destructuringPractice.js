import { donutVariants } from "./donut.js";

console.log("Donuts", donutVariants);

//Mapping through the array of donuts
const eachDonut = () =>
  donutVariants.map((k, v) => {
    console.log("Key", k);
    console.log("Value", v);
    return v;
  });

console.log("here is each Donut", eachDonut());

//Destructuring donuts
var donut1;
const destructureDonuts = () =>
  donutVariants.map((donut) => {
    const {
      id: ID,
      notPresent = { a: 1, here: { numb: 15, there: 10 } },
      batters
    } = donut || {};
    console.log("Id and batters are", ID, notPresent?.here.there, batters);
  });

destructureDonuts();

//Passing in the right parameters for destructing donuts
const donutDestructureParameters = ({
  id: ID,
  type: Type,
  batters: Batters,
  id: IDforBatters
}) => {
  console.log(ID, Type, Batters);
  const metaDonut = {
    ID,
    IDandType: { ID, Type },
    IDandBatters: { IDforBatters, MyBatters: Batters }
  };
  return metaDonut;
};

const donutMenu = donutVariants.map((donut, number) => {
  return donutDestructureParameters(donut);
});

console.log("Donut Menu", donutMenu);

const destructureWithArray = (id, name, type, rest) => {
  return [id, type, name, rest];
};

const donutArray = donutVariants.map((donut) => {
  const { id, name, type, ...rest } = donut;
  console.log("All other values", rest);
  return destructureWithArray(id, name, type, rest);
});

console.log("Donut Array", donutArray);
