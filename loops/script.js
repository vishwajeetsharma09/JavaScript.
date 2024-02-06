// loop is called for-of loop for sting and arrays
// let str = "vishwajeet sharma";
// let size = 0;
// for (let i of str) {
//   console.log("i=", str);
//   size++;
// }
// console.log("size = ", size);

// loop for in used for oject key pair values

let student = {
  name: "vishwajeet sharma",
  age: 20,
  cgpa: 10,
  isPass: true,
};
for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}
