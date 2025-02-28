// Создайте Map, где ключами будут имена пользователей, а значениями - их любимые фрукты (можно представить в виде Map<string, Set<string>>).
// - добавьте несколько пользователей и их любимые фрукты в Map
// - получите любимые фрукты определенного пользователя
// - проверьте, содержится ли определенный фрукт в списке любимых фруктов пользователя
// - удалите пользователя из Map

let map = new Map();

map.set('Victor', new Set(['apple', 'banana', 'orange']));
map.set('Igor', new Set(['apple', 'banana']));
map.set('Denis', new Set(['banana', 'orange']));

console.log(map);
console.log(map.get('Victor'));
console.log(map.get('Igor'));
console.log(map.get('Denis'));
console.log(map.get('Denis').has('apple'));
console.log(map.get('Denis').has('banana'));
console.log(map.delete('Victor'));
console.log(map);