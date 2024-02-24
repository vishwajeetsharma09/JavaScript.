let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//   //   console.log("btn1 as clicked");
//   //   let a = 25;
//   //   a++;
//   //   console.log(a);
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
// };

btn1.addEventListener("click", (evt) => {
  console.log("Button was clicked-handler 1");
});
let div = document.querySelector("div");
btn1.addEventListener("click", () => {
  console.log("button was clicked - handler2");
});
const handler3 = () => {
  console.log("Button was Clicked - Handler 3");
};
btn1.addEventListener("click", handler3);
btn1.removeEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button was clicked - handler4");
});


// div.onmouseover = (evt) => {
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log("you are inside div");
// };
