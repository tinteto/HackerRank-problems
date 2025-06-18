function firstUniqueCharacter(str) {
let charObj = {};

for(let char of str) {
    if(!charObj.hasOwnProperty(char)) {
    charObj[char] = 0;
    }
    charObj[char]++;  
}

for(let char of str) {
    if(charObj[char] === 1) {
        return char;
    }

}

return null;

}

console.log(firstUniqueCharacter("aabbcc"));
