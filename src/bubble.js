const arr = [5, 2, 1, 3, 9, 0, 4, 6, 8, 8, 7]
    let count = 0

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j+1]
                array[j+1] = tmp
            }
            count+=1
        }
    }
    return array
}

console.log('length', arr.length)
console.log(bubbleSort(arr)) // O(n*n)
console.log('count = ', count)