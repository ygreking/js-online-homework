/**
 * Задача 3.
 *
 * Напишите функцию `createArray`, которая будет создавать массив с заданными значениями.
 * Первым параметром функция принимает значение, которым заполнять массив.
 * А вторым — количество элементов, которое должно быть в массиве.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента были переданы не число, не строка, не объект и не массив;
 * - В качестве второго аргумента был передан не число.
 */

// Решение

function createArray(value, quantity) {
    if (arguments.length !== 2) {
        throw new Error('Function expects two arguments');
    }
    if (
        typeof value !== 'number' &&
        typeof value !== 'string' &&
        typeof value !== 'object'
    ) {
        throw new error(
            'The first argument has to be a number, a string, an object or an array'
        );
    }
    if (typeof quantity !== 'number') {
        throw new Error('The second argument has to be a number');
    }

    const outArray = [];

    for (let i = 0; i < quantity; i++) {
        outArray.push(value);
    }

    return outArray;
}

const result = createArray('x', 5);

console.log(result); // [ x, x, x, x, x ]

exports.createArray = createArray;
