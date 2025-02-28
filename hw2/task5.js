// Реализуйте функцию, которая принимает два массива чисел и возвращает новый массив, содержащий элементы, которые есть только в одном из массивов. (Дано: [1,2,3,4],[1,5,6,3]; Результат: [2,4,5,6]).

const array1 = [1, 2, 3, 4];
const array2 = [1, 5, 6, 3];

function findUniqueElements(arr1, arr2) {
    const uniqueElements = [];

    for (let element of arr1) {
        if (!arr2.includes(element)) {
            uniqueElements.push(element);
        }
    }

    for (let element of arr2) {
        if (!arr1.includes(element)) {
            uniqueElements.push(element);
        }
    }

    return uniqueElements;
}

const result = findUniqueElements(array1, array2);
console.log(result);