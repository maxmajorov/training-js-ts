// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
  let temp: number = 0;
  nums.forEach((el) => (temp += el));
  return temp;
}

// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
  return a + b < c || b + c < a || a + c < b
    ? "00"
    : a !== b && b !== c && a !== c
    ? "11"
    : a === b && b === c && a === c
    ? "10"
    : "01";
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
  let temp: number = 0;
  number
    .toString()
    .split("")
    .forEach((el) => (temp += +el));
  return temp;
}

// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  let temp_even: number = 0;
  let temp_odd: number = 0;

  arr.filter((el, ind, arr) => ind % 2).forEach((el) => (temp_odd += el));
  arr.filter((el, ind, arr) => !(ind % 2)).forEach((el) => (temp_even += el));

  return temp_even > temp_odd;
};

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив.
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  return array.filter((el) => el > 0 && !(el % 2)).map((el) => Math.pow(el, 2));
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
  //   return N === 1 ? 1 : N + sumFirstNumbers(N - 1); //Почему-то не работает
  return (N * (N + 1)) / 2;
}

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено

export function getBanknoteList(amountOfMoney: number): Array<number> {
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  let arrBanknote: Array<number> = [];

  if (amountOfMoney >= 0) {
    for (let i = 0; i < banknotes.length; i++) {
      let note = banknotes[i];

      while (amountOfMoney - note >= 0) {
        amountOfMoney -= note;
        arrBanknote.push(note);
      }
    }
  } else console.log("Please enter new amount");

  return arrBanknote;
}
