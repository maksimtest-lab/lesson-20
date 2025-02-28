// Создайте пустой Map и добавьте несколько элементов с различными ключами и значениями.
// - проверь, содержит ли Map определенный ключ
// - получи значение по ключу из Map
// - удали элемент из Map
// - очисти всю Map

let map = new Map();

map.set('key1', 'value1');
map.set('key2', 'value2');
map.set('key3', 'value3');

console.log(map);
console.log(map.has('key1'));
console.log(map.get('key2'));
console.log(map.delete('key3'));
console.log(map.clear());
console.log(map);