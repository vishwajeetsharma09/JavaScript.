// let num = prompt("enter the number");
// for (let i= 0; i <= num; i++) {
//   if (num % 2 === 0) {
//     console.log("num is even", num);
//   } else {
//     console.log("num is odd", num);
//   }
// }
let gamenum= 25;
let usernumber = prompt("Guss the game number")
// console.log(usernumber);
while(usernumber != gamenum){
  usernumber = prompt("you enter wrong number");

}
console.log("great you enter the right number")