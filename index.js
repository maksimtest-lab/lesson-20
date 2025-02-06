let arr = ['Igor', 25, true];

let obj = {
    age: 25,
    isStudent: true,
    name: 'Igor',
}

let name = obj.name;

console.log(arr);
console.log(obj);
console.log(Object.keys(obj), Object.values(obj), Object.entries(obj));

console.log(arr[1]);

delete arr[1];

console.log(arr);
console.log(arr.length);
console.log(arr[arr.length - 1], arr.length);

// Методы

// Pop, Push, Shift, Unshift
console.log(arr.push('Igor'));
console.log(arr.push(-1, 'asdf'));
console.log(arr.push('xcvb'));
console.log(arr.push('vbn'));

console.log(arr.pop());

console.log(arr.unshift([1,2,'3']));
console.log(arr.shift());
console.log(arr);

arr[1] = 'Igor';

// With
let copiedArr = arr.with(0, 'Vanja');

console.log(copiedArr, 'with');

arr.fill('Hello', 0, 200);
console.log(arr);

console.log(arr.splice(1, 2));

// Splice
let months = ['Jan', 'March', 'April', 'May', 'June']; // ?? 'February'

months.splice(1, 0, 'February');

console.log(months);

months.splice(0, 2);
console.log(months);

months.splice(-1, 1, 'July');
console.log(months);


// Slice
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals);
console.log(animals.slice(2, 4));
console.log(animals.slice(-2));

console.log(animals.slice(2, 4));
console.log(animals.concat(['fox', 'giraffe'].concat('cat', 'dog', 'horse')));

months.splice(months.indexOf('March'), 0, 'February');
const str = 'I am learning JavaScript';
const strArr = str.split(' ');
const newStrArr = [];

for (let index in strArr) {
    strArr[index][0] = strArr[index][0].toUpperCase();
    console.log(strArr[index][0].toUpperCase());
    newStrArr.push(strArr[index][0].toUpperCase() + strArr[index].slice(1));
}

console.log(strArr);
console.log(newStrArr);

animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'camel'];
console.log(animals);

// indexOf, lastIndexOf, includes
console.log(animals.indexOf('camel'));
console.log(animals.lastIndexOf('camel'));
console.log(animals.indexOf('zxcg'));

console.log(animals.includes('elephant'));
console.log(animals.includes('Igor'));

// Find, FindIndex, Some, More, Every
let numbers = [1, 5, 12, 8, 130, 44];

console.log(numbers.find((element) => element > 5));
console.log(numbers.findIndex((element) => element === 12));
console.log(numbers.some((element) => element > 12));
console.log(numbers.every((element) => element > 5));
console.log(numbers.every((element) => element > 0));

// Для перебора элементов forEach, map
const testArr = [];

numbers.forEach((number) => testArr.push(number.toString()));

console.log(numbers);
console.log(testArr);
let strNumbersArr = numbers.map((number) => number.toString());
console.log(strNumbersArr);

// Для перебора элементов filter
console.log(numbers.filter((number) => number > 5));

// Для перебора элементов sort
let sortedAnimals = animals.sort();
console.log(sortedAnimals);
console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => a + b));
console.log([1,2,3,4,5,6,7,8].sort((a, b) => (a % 2) - (b % 2)));


// Reverse
console.log([1,2,3,4,5,6].reverse());

// Reduce
numbers = [1,2,3,4,5,6,7,8];
let sum = numbers.reduce((acc, number, arr) => acc + number, 0)
console.log(numbers);
console.log(sum);

sum = numbers.reduce((acc, number, arr) => {
    acc.sum = acc.sum + number;
    acc.total += 1;
    return acc;
}, {sum: 0, total: 0});

console.log(numbers);
console.log(sum);