// let age = 24;
// console.log(typeof age);

// let fullName = "vishwajeet sharma";
// console.log(typeof fullName);

// let isLogin = true;
// console.log(typeof isLogin);

// let courseName;
// console.log(typeof courseName);

// let course = null;
// console.log(typeof course);

// let person = {
//     name: "vishwajeet sharma",
//     age: 24,
//     isLogin: true
// }

// let x= BigInt("123");
// console.log(typeof x);

// let y= Symbol("123");
// console.log(typeof y);

//To make a object
const student = {
  fullName: "vishwajeet sharma",
  age: 24,
  isLogin: true,
  course: ["html", "css", "js", "react"],
  address: {
    city: "jaipur",
    state: "rajasthan",
    pin: 302020,
  },
};
console.log(typeof student, student, student["fullName"]);
//another ways to get the fullName
console.log(student.fullName);

//update a new inside the object

student["age"] = student["age"] + 1;
console.log(student.age);
