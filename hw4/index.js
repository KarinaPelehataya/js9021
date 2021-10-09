// Task 1
function fib (n){
return n <= 1 ? n : fib(n - 1) + fib(n - 2);
 }
//  alert (fib(11)) ;

 // Task 2 
  const a=[10, 20, 30, 50, 235, 3000];
 
  function checkFirstNum(array){
      array.forEach(element => {
          if(parseInt(String(element).charAt(0)) === 1 || parseInt(String(element).charAt(0)) === 2 ||parseInt(String(element).charAt(0)) === 5){
              console.log(element)
          }
      });
  }
//   checkFirstNum(a)

  // Task 4
let iteration = 0;
  for(let n = 1000; n > 50; n/=2) {
    iteration++   
  }
  console.log(`WE have ${iteration} iterations`);