function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsCount = 0;
    let lowerStr = str.toLowerCase();

    for(let char of lowerStr) {
       if(vowels.includes(char)) {
        vowelsCount++;
       }
    }
    return vowelsCount;
}

console.log( countVowels('Prgrss'));
