function caesarCipher(s, k) {
    let result = '';
    k = k % 26; 

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char >= 'a' && char <= 'z') {
            let character = ((char.charCodeAt(0) - 97 + k) % 26) + 97;
            // Lowercase letter
            let shifted = String.fromCharCode(character);
            result += shifted;
        } else if (char >= 'A' && char <= 'Z') {
            // Uppercase letter
            let character = ((char.charCodeAt(0) - 65 + k) % 26) + 65;
            let shifted = String.fromCharCode(character);
            result += shifted;
        } else {
            // Non-letter character remains unchanged
            result += char;
        }
    }

    console.log(result);
    
}

caesarCipher('middle-Outz', 2);