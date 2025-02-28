// Создайте Set с несколькими именами животных.
// - используя метод filter(), создай новый Set, содержащий только имена животных, начинающиеся с определенной буквы

let animals = new Set(['cat', 'dog', 'fish', 'snake', 'lion']);

let filteredAnimals = new Set(Array.from(animals).filter((animal) => animal[0] === 's'));

console.log(filteredAnimals);