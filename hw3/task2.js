// Создай пустой Set и добавьте несколько значений.
// - проверьте, содержит ли Set определенное значение
// - удалите значение из Set
// - очистите весь Set

let set = new Set();

set.add('value1');
set.add('value2');
set.add('value3');

console.log(set);
console.log(set.has('value1'));
console.log(set.delete('value2'));
console.log(set.clear());
console.log(set);