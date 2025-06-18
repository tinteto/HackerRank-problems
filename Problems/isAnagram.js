function isAnagram(str1, str2) {
// let newStr1 = str1.split('').sort().join('');
// let newStr2 = str2.split('').sort().join('');

const normalize = (str) => str.split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(isAnagram("listen", "silent"));
