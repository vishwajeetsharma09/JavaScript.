// function getData(dataId) {
//   setTimeout(() => {
//     console.log("data", dataId);
//   }, 2000);
// }

// let Promise = new Promises((resole, reject) => {
//   return new Promise((resole, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resole("succes");
//     }, 2000);
//   });
// });

const getPromise = () => {
  return new Promise((resolve, reject) => {
    console.log("i am a promise ");
    resolve("Sucess");
  });
};
let promise = getPromise();
promise.then(() => {
  console.log("Promise Fulfill");
});

//data1
//data2
//data3
