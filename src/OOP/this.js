// demonstrating class based concepts in JS

class demoClass {
  constructor(name) {
    this.state = { name: name, age: "" };
  }
  displayname() {
    console.log("My name is", this.state?.name);
  }
  displayThis() {
    console.log("Display this keyword:", this);
  }
}

const demoed = new demoClass("Maqu");
demoed.displayname();
demoed.displayThis();

class specialDemoClass extends demoClass {
  constructor(name) {
    super(name);
    this.name = name;
  }
  displaySpecialMethod() {
    console.log("I am a special class with inherited name:", this.name);
  }
}

const specialDemoed = new specialDemoClass("Maq");
specialDemoed.displayname();
specialDemoed.displaySpecialMethod();

function printMe() {
  this.name = "Maq";
  console.log("this is awesome", this);
}

printMe.call({ hello: "Maqu" });

const obj1 = {
  name: "Sye",
  age: 23
};

console.log(obj1.__proto__);
