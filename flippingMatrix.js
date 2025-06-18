function flippingMatrix(matrix) {
    let n = matrix.length / 2;

    
    let maxSum = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            maxSum += Math.max(
                matrix[i][j],
                matrix[i][2 * n - 1 - j],
                matrix[2 * n - 1 - i][j],
                matrix[2 * n - 1 - i][2 * n - 1 - j]
            );
        }
    }

    return maxSum;
}

const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
];

console.log(flippingMatrix(matrix)); // Output: 414