// Работа с массивами объектов с большой вложеннотью.
// Для упрощения работы проще всего попилить массив на части. Создать объект 
// и положить в него в виде ключ : значение вложенные данные. 
// Где ключем будет выступать id-шка каждого елемента 

const todoLists = [
    {
        id: '12bgr-01kg',
        filter: 'all',
        title: 'What to learn',
        tasks: [
            {id: '10dfg-01df', title: 'HTML', isDone: true},
            {id: '10dfg-02df', title: 'CSS', isDone: true},
            {id: '10dfg-03df', title: 'React', isDone: false}
        ]
    },
    {
        id: '12bgr-02kg',
        filter: 'all',
        title: 'What to buy',
        tasks: [
            {id: '11dfg-01df', title: 'Milk', isDone: true},
            {id: '11dfg-02df', title: 'Solt', isDone: false},
            {id: '12dfg-03df', title: 'Bread', isDone: false}
        ]
    }
]

const todoTasksItems = {
    [todoLists[0].id] : todoLists[0].tasks,
    [todoLists[1].id] : todoLists[1].tasks,
}

console.log(todoTasksItems[todoLists[0].id]);
console.log(todoTasksItems[todoLists[0].id][2].title);

//REDUCE

const arrNum = [1, 2, 3, 4, 5]
//Так же принимает третий необязательный параметр => Стартовое значение
console.log(arrNum.reduce((acc, el) => acc + el));
//Можно найти максимальный елемент массива
console.log(arrNum.reduce((max, el) => max > el ? max : el));

const students = [
    {
        name: 'Maxim',
        age: 32,
        isMarried: true,
        score: 85
    },
    {
        name: 'Olga',
        age: 40,
        isMarried: true,
        score: 78,

    },
    {
        name: 'Pavel',
        age: 6,
        isMarried: false,
        score: 80,

    },
    {
        name: 'Karina',
        age: 20,
        isMarried: false,
        score: 91,
    },
]

console.log(students.reduce((acc, el) => acc + el.score, 0));

console.log(students.reduce((acc, el) => {
    // el.isMarried ? acc.push(el) : null
    if (el.isMarried) {acc.push(el)}
    return acc
}

, []));
    
console.log(students.reduce((acc, el) => !el.isMarried ? [...acc, el] : acc, []));

// {'Max' : 80, 'Olga' : 32, ....}

console.log(students.reduce((newObj, el) => {
    newObj[el.name] = el.score
    return newObj

}, {}));
    