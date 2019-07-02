/**
 * Задача 1.
 *
 * Напишите функцию upperCaseFirst(string).
 * Функция преобразовывает первый символ переданной строки в заглавный и возвращает новую строку.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

// Решение

function upperCaseFirst(str) {
    if (typeof str !== 'string') {
        throw new Error('input has to be a string.');
    }
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(upperCaseFirst('pitter'));

upperCaseFirst('pitter'); // Pitter
upperCaseFirst(''); // ''

exports.upperCaseFirst = upperCaseFirst;
