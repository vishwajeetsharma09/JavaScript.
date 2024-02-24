// // to create function syntax

// function welcome() {
//   console.log("Welcome to my website!");
// }
// //To call the function
// welcome();

// /*
// Functions are reusable pieces of code that perform a specific task. They can take in parameters
// (also known as arguments), which allow you to customize the behavior of the function when it's called.
// */
// let x = 5;
// function addNumber(a, b) {
//   return a + b;
// }
// let finalNumber = addNumber(5, 3);
// console.log(finalNumber);

// function countVowel(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char === "a" ||
//       char === "i" ||
//       char === "o" ||
//       char === "u" ||
//       char === "e"
//     ) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countVowel("a"));

const vowel = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "e"
    ) {
      count++;
    }
  }
  return count;
};
