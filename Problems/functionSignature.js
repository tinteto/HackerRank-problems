function hasUniqueCharacters(str) {
let characters = [];
let lowerStr = str.toLowerCase();

    for(let i = 0; i < lowerStr.length; i++) {
        let currentCharacter = lowerStr[i];
        if(characters.includes(currentCharacter)) {
            return false;
        }

        characters.push(currentCharacter);
        
    }

    return true;
}

console.log(hasUniqueCharacters('Progress'));
