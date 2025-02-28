const numbers = [1, -2, 3, -4, 111, -22, -33, 45, 78];

const splitPositiveNegative = (array) => {
    return array.reduce((acc, element) => {
        if (element > 0) {
            acc.positive.push(element);
        } else {
            acc.negative.push(element);
        }
        return acc;
    }, {positive: [], negative: []})
}

const result = splitPositiveNegative(numbers);

console.log(numbers);
console.log(result);

const splitPositiveNegative2 = (array) => {
    const negativeNumbers = (array.filter((element) => element < 0)).sort((a, b) => a - b);
    const positiveNumbers = (array.filter((element) => element > 0)).sort((a, b) => a - b);
    return {positive: positiveNumbers, negative: negativeNumbers};
}

const result2 = splitPositiveNegative2(numbers);

console.log(result);