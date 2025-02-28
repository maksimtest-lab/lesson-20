const animals = ['ant', 'camel', 'duck', 'elephant', 'chicken'];

const findLongestWorld = (array) => {
    const wordInfo = array.reduce((acc, element) => {
        if (element.length > acc.length) {
            acc.length = element.length;
            acc.word = element;
        }

        return acc;

    }, { word: null, length: 0});

    return wordInfo['word'];
}

const longestWorld = findLongestWorld(animals);

console.log(longestWorld);