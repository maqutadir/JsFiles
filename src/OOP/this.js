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

//builder Pattern
class EmployeeDepartment {
  constructor(department, manager) {
    (this.department = department), (this.manager = manager);
  }
}

class Employee {
  constructor(name) {
    this.name = name;
  }
}

class EmployeeBuilder {
  constructor(name) {
    this.employee = new Employee(name);
  }

  setWorkHours(workHours) {
    this.employee.workHours = workHours;
    return this;
  }

  setRole(role) {
    this.employee.role = role;
    return this;
  }

  setEmployeeDepartment(employeeDepartment) {
    this.employee.employeeDepartment = employeeDepartment;
    return this;
  }

  setAge(age) {
    this.employee.age = age;
    return this;
  }

  setSalary(salary) {
    this.employee.salary = salary;
    return this;
  }

  build() {
    return this.employee;
  }
}

// Creating new object
let emp1 = new EmployeeBuilder("Jack")
  .setRole("Store Manager")
  .setEmployeeDepartment(new EmployeeDepartment("Admin", "Jill"))
  .build();

console.log("Emp1 details are: ", emp1);
