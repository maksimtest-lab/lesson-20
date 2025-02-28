// Проверьте, содержит ли массив fruits = ['apple', 'orange', 'banana', 'grape'] значение banana.

const fruits = ['apple', 'orange', 'banana', 'grape'];
const containsBanana = fruits.includes('banana');
const containsBanana2 = fruits.indexOf('banana') !== -1;
const containsBanana3 = fruits.indexOf('asdf') !== -1;

console.log(containsBanana);
console.log(containsBanana2);
console.log(containsBanana3);