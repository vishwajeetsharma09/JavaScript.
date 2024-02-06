// multiple of 5
let num=prompt('enter a number');
if(num%5==0){
  console.log(num,'number is multiple of 5');
}else{
  console.log(num,'number is not multiple of 5');
}

//code which give grade to according to their scores
let score=prompt('enter your score');
if(score>=80){
  console.log('A');
}
else if(score>=60){
  console.log('B');
}
else if(score>=40){
  console.log('C');
}
else{
  console.log('D');
}