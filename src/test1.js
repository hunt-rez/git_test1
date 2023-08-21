/* ОСНОВНОЙ КОД
const n = 12;
const g = 5;

function Const(p) {
    if (p > 0 && p !== 0) {
        console.log('число больше нуля');
    } else if (p < 0) {
        console.log('число меньше нуля');
    } else if (p === 0) {
        console.log('Это ноль, чувак');
    }
    else if (g < p && p < n) {
        console.log('тестовая штука');
    }
}

Const(n);
Const(g);



/*  код в2
const n = 12;
const g = 5;

function Const(p, g, n) {
    if (p > 0 && p !== 0) {
        console.log('число больше нуля');
    } else if (p < 0) {
        console.log('число меньше нуля');
    } else if (p === 0) {
        console.log('Это ноль, чувак');
    }
    else if (g < p && p < n) {
        console.log('тестовая штука');
    }
}

Const(n);
Const(g);
 */



const arr = [5, 2, 1, 3, 9, 0, 4, 6, 8, 8, 7]
let count = 0

function quickSort(array) {
    if (array.length <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(arr))
console.log('count', count)