//Polyfill for bind function

let obj1 = {
  a: 23,
  b: 35,
  names: [
    {
      firstName: "Jack",
      lastName: "Reacher"
    },
    {
      firstName: "James",
      lastName: "Bond"
    }
  ],
  printFullName: function (homeCountry) {
    return this.names.map(
      (key, index) =>
        key.firstName + " " + key.lastName + " from " + homeCountry[index]
    );
  }
};

function createAbb(homeCountry) {
  console.log("Home Country", homeCountry);
  const { names } = this;
  console.log("this", names);
  return function () {
    console.log("names", names);
    const result = names.map((key, index) => {
      return key.firstName
        .substring(0, 2)
        .concat("-", key.lastName.substring(0, 2))
        .concat("_", homeCountry[index]);
    });
    return result;
  };
}

//console.log(obj1.printFullName(['India','USA']))

let obj2 = {
  names: [
    {
      firstName: "Ratan",
      lastName: "Tata",
      age: 90
    },
    {
      firstName: "Micheal",
      lastName: "Jackson",
      age: 1000
    },
    {
      firstName: "Virat",
      lastName: "Kohli",
      age: 34
    },
    {
      firstName: "Roger",
      lastName: "Fedrer",
      age: 38
    }
  ]
};

//Call function demo

const allStars = [
  ...obj1.printFullName.call(obj2, ["India", "USA", "India", "Switzerland"]),
  ...obj1.printFullName(["USA", "UK"])
];
console.log("All stars are", allStars);
allStars.sort((a, b) => (a < b ? 1 : -1));
console.log("All stars sorted descending are", allStars);

const obj1Extended = createAbb.bind(obj1);
const result = obj1Extended(["USA", "UK"])();
console.log("Result", result);
