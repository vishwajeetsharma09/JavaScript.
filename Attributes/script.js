// let div = document.querySelector("div");
// // console.dir(divs);
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);
// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector(".Para");
// console.log(para);

// let para1 = para.getAttribute("class");
// console.log(para1);

// let newBtn = document.createElement("button");
// console.log(newBtn);
// console.dir(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<h1> hi i am new!</h1>";
document.querySelector("body").prepend(newHeading);
