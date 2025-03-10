// Создайте функцию, которая принимает строку, представляющую последовательность ДНК, и возвращает двумерный массив, где каждая внутренняя подмассива представляет собой пару оснований ДНК (нуклеотидов).
// Основание ДНК может быть одним из четырех: "A" (аденин), "T" (тимин), "C" (цитозин) и "G" (гуанин). В паре оснований ДНК "A" всегда парное "T", а "C" всегда парное "G".
// Например, если дана последовательность ДНК "ATCGA", функция должна вернуть следующий массив: [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]].

const splitDna = (dna) => {
    const result = [];
    for (let char of dna) {
        result.push([char, char === "A" ? "T" : char === "T" ? "A" : char === "C" ? "G" : "C"]);
    }

    return result;
};

const result = splitDna("ATCGA");
console.log(result);