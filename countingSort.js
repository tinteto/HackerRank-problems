function countingSort(arr) {
let numbers = Array(100).fill(0)

for (let i = 0; i < arr.length; i++) {
    numbers[arr[i]]++;
}

console.log(numbers.join(' '))
}


countingSort([4, 9, 69,48, 33]);
