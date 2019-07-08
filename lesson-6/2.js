/**
 * Задача 2.
 *
 * Вручную создать имплементацию функции `filter`.
 * Логика работы ручной имплементации должна быть такой-же,
 * как и у встроенного метода.
 *
 * Генерировать ошибки, если:
 * - При вызове функции не было передано два аргумента;
 * - В качестве первого аргумента был передан не массив;
 * - В качестве второго аргумента была передана не функция.
 */

const array = ['Доброе утро!', 'Добрый вечер!', 3, 512, '#', 'До свидания!'];

// Решение

function filter(array, callback) {
    if (arguments.length < 2) {
        throw new Error('the function should be called with two parameters');
    } else if (!Array.isArray(array)) {
        throw new Error('first parameter type should be an array');
    } else if (typeof callback !== 'function') {
        throw new Error('second parameter type should be a function');
    }

    let outputArray = [];

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) outputArray.push(array[i]);
    }
    return outputArray;
}

const filteredArray = filter(array, function(item, i, arrayRef) {
    console.log(item); // элемент массива
    console.log(i); // индекс элемента
    console.log(arrayRef); // ссылка на обрабатываемый массив

    return item === 'Добрый вечер!';
});

console.log(filteredArray); // ['Добрый вечер!']

exports.filter = filter;
