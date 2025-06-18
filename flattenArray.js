function flatten(arr) {
// let flatten = arr.flat(Infinity);

// console.log(flatten);

const result = [];

for (let item of arr) {
    if(Array.isArray(item)) {
    result.push(...flatten(item));
    } else {
    result.push(item);
    }


}

return result;

}
console.log( flatten([1, [2, [3, 4], 5], 6]));
