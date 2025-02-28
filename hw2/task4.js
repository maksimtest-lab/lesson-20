// Реализуйте функцию, которая преобразует двумерный массив (матрицу) в одномерный массив без метода flat.

// Решение с использованием метода flat
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

const flattenMatrix = (matrix) => {
    return matrix.flat();
};
console.log(matrix);
console.log('Решение с использованием метода flat', flattenMatrix(matrix));

// Решение с без использования метода flat
const flattenMatrix2 = (matrix) => {
    const result = [];
    for (let arr of matrix) {
        for (let val of arr) {
            result.push(val);
        }
    }

    return result;
};

console.log(matrix);
console.log('Решение с без использования метода flat', flattenMatrix2(matrix));