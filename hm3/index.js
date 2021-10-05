//Task 1
// Почитать здесь теорию по этому заданию 
// https://medium.com/@alivander/%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC-javascript-54462b2989a6


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

//Task 3
//За это задание хз нужно посмотреть
// Инфа тут
//https://learn.javascript.ru/task/fibonacci-numbers


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}


ChessAndRise(1, 0.019)