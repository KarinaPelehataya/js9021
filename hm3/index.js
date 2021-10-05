//Task 1 
const bubbleSort = arr => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        let wasSwap = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return arr;
};
const result = bubbleSort([5, 8, 1, 9, 2, 6, 3, 7, 4]);
console.log(result)

//Task 1 in class
  let arr = [5, 8, 1, 9, 2, 6, 3, 7, 4]
  
  for(let i=0; i<arr.length; i++) {
    for(let j=1; j=<arr.length-1; j++) {
        if(aee[j]>arr[j+1]){
            let min= arr[j+1];
            arr[j+1]= arr[j];
            arr[j]=min;
        }
    }
  }


//Task 2

function ChessAndRise(risePrice, riseItemWeight) {
    let s = 0;
    let d = 1;
    for (let i = 0; i < 64; i++) {
        s += d;
        d *= 2;
    }
    let allRiseWeightInKilo = s * riseItemWeight / 1000;
    let allRisePrice = allRiseWeightInKilo * risePrice;
    return allRisePrice
}

// Task 2 in class
let arruza= 0.000019;
let price =1;// usd
let rice_count = 1;// short version  rc=1+ Math.pow(2,63);
let weight;
for(let i=0;i<64; i++){
    rice_weight = additionalCount * arruza;
}
console.log(rice_weight)

//Task 3
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

// Task 3 in class

let fib=11;
let a= 1;
let b= 1;
let c;

let fibNum; 
for(i =2;i<= fib; i++){
    c=a+b;
    a=b;
    b=c;
}
console.log(fibNum);

let fibArr=[1,1];
for(let i=2; i<= fib;i++){
    fibArr[i];
}