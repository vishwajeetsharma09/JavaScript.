// const student = {
//   fullName: "Vishwajeet Sharma",
//   marks: 98,
//   printMarks: function () {
//     console.log("marks id =", this.marks);
//   },
// };

// const karanArjun = {
//   salary: 50000,
// };

// how to make a prototype of one function
// --prototype of employee is

// karanArjun.__proto__ = student;

// const employee = {
//   calTax() {
//     console.log("tax rate is 10%");
//   },
// };
// const karanArjun = {
//   salary: 900000,
//   calTax() {
//     console.log("tax rate is 10%");
//   },
// };

// karanArjun.__proto__ = employee;

// class
// class ToyotaCar {
//   constructor(brand) {
//     console.log("create new object");
//     this.brand = brand;
//   }
//   start() {
//     console.log("start");
//   }
//   stop() {
//     console.log("stop");
//   }
//   setBrand(brand) {
//     this.brand = brand;
//   }
// }
// let fortuner = new ToyotaCar("fortuner");
// //fortuner.setBrand("Fortuner");
// let lexus = new ToyotaCar("lexus");
// //lexus.setBrand("Lexus RX");

// class parent {
//   hello() {
//     console.log("Hello");
//   }
// }
// class child extends parent {}
// let obj = new child();

// Inhertance properties

class person {
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
}
class Engineer extends person {
  work() {
    console.log("buld something");
  }
}
let bittoObj = new Engineer(); 
