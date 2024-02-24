let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currentMode = "light";
modeBtn.addEventListener("click", () => {
  //console.log("you are trying to change the mode");
  if (currentMode == "light") {
    currentMode = "dark";
    body.style.backgroundColor = "#302E41";
  } else {
    currentMode = "light";
    body.style.backgroundColor = "white";
  }
  console.log(currentMode);
});
