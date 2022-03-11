// Работа с массивами объектов с большой вложеннотью.
// Для упрощения работы проще всего попилить массив на части. Создать объект 
// и положить в него в виде ключ : значение вложенные данные. 
// Где ключем будет выступать id-шка каждого елемента 

//==============================//

const user = {
    _id: '12gh-ffgg',
    name: 'Maxim',
    age: 32,
    location: {
        country: 'Belarus',
        city: 'Minsk',
        adress: {
            street: 'Ybileynaya',
            home: 25
        }
    }
}

console.log(user.location.adress.street);
//========OR=========
console.log(user['location']['adress']['street']);

const users = {
    0 : 'Maxim',
    1 : 'Olga',
    2 : 'Pavel',
    4 : 'Karina'
}

console.log(users);
console.log(Object.keys(users));
console.log(Object.values(users));


const users_2 = {
    '0123dd' : {id: '0123dd', name: 'Maxim', age: 32, isMarried: true},
    '1343gg' : {id: '1343gg', name: 'Olga', age: 40, isMarried: true},
    '2sfdd3' : {id: '2sfdd3', name: 'Pavel', age: 6, isMarried: false},
    '4dsd44' : {id: '4dsd44', name: 'Karina', age: 19, isMarried: false},
}

console.log(users_2['2sfdd3']); //O(1)

const newUser = {id: '23ddd3', name: 'Dasha', age: 25, isMarried: false}
users_2[newUser.id] = newUser //если вдруг с таким id уже есть просто перезатрет
delete users_2["1343gg"] // Удалим запись
users_2['2sfdd3'].name = 'VOLODYA' //Перезаписываем
console.log(users_2);

//Если че мы будем искать через id в массиве объектов, то сложность 
// ==>>> O(n). Так как придется итерироваться по всему массиву.
// А в ассоциативном массиве обращаясь к конкретному id мы получим мгновенно значение

const users_3 = [
    {_id: '0123dd', name: 'Maxim', age: 32, isMarried: true},
    {_id: '1343gg', name: 'Olga', age: 40, isMarried: true},
    {_id: '2sfdd3', name: 'Pavel', age: 6, isMarried: false},
    {_id: '4dsd44', name: 'Karina', age: 19, isMarried: false},
]

console.log(users_3.filter(el => el._id === '0123dd')); //O(n)

users_3.push(newUser)
let newUsers_3 = [...users_3, newUser]
//А если уже существует то нужно фильтровать и опять сложность O(n)
console.log(users_3);