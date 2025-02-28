// Сделайте из массива numbers = [1, 1, 1, 2, 2, 3, 4, 4, 4, 3, 9, 5, 9, 5] массив уникальных значений с помощью filter.

const numbers = [1, 1, 1, 2, 2, 3, 4, 4, 4, 3, 9, 5, 9, 5];
const uniqueNumbers = numbers.filter((number, index) => numbers.indexOf(number) === index);

console.log(uniqueNumbers);