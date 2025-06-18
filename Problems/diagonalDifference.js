function diagonalDifference(arr) {
    let n = arr.length;
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < n; i++) {
        let smth = arr[i][i];
        console.log(smth);
        
        primaryDiagonal += arr[i][i]; //arr[0][0], arr[1][1]..
        secondaryDiagonal += arr[i][n - 1 - i];
    }

    return Math.abs(primaryDiagonal - secondaryDiagonal);
}

const matrix = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12], 
];

console.log(diagonalDifference(matrix));