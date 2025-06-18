function solve(arr) {
 let obj = {};

 for(let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if(!obj.hasOwnProperty(curr)) {
    obj[curr] = 1;
    } else {
    obj[curr]++;
    }
 }

 let maxCount = 0;
 let mostFrequent = null;

 for(let key in obj) {
    if(obj[key] > maxCount) {
    maxCount = obj[key];
    mostFrequent = key;
    }
 }

console.log(obj);
console.log(mostFrequent);

} 
solve([1, 3, 1, 3, 2, 1]);
 