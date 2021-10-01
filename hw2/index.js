//Task 1

let a = -2;

if(a >= 0){
    console.log('A >= 0');
} else {
    console.log('A < 0');
}

//Task 2

let b = ' ';

if (b) {
    console.log("true");
} else {
    console.log("false");
}

// Task 3

let c=0;

if(c===0 || c===2){
    c = c + 7;
}else {
    c = c/10
} 
console.log(c)


// Task 4 

let d =1;
let e = 2;

if(d <= 1 && e >= 3){
    console.log(d+e)
}else {
    console.log(d-e)
}

// Task 5

let month = +prompt('Type number 1-12', 1);

switch (month) {
  case 1:
  case 2:
  case 12:
    console.log('winter');
    break;
  case 3:
  case 4:
  case 5:
    сonsole.log('spring');
    break;
  case 6:
  case 7:
  case 8:
    console.log('summer');
    break;
  case 9:
  case 10:
  case 11:
    console.log('autumn');
    break;
  default:
    console.log('Not a month')
}