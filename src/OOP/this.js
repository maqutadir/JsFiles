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

const demoedClass = new demoClass("Maqu");
demoedClass.displayname();
demoedClass.displayThis();
