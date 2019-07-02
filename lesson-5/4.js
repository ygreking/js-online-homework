/**
 * Задача 4.
 *
 * Дана стоимость в виде строки: `"$120"`.
 * Первый символ — валюта, затем – число.
 * Создайте функцию `extractCurrencyValue(source)`, которая будет из такой строки выделять число-значение, в данном случае 120.
 * Обратите внимание что нужно возвращать не строку 120 а именно число 120.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит валидацию входного параметра на тип string.
 */

const PRICE = '$120';

// Решение
function extractCurrencyValue(source) {
    if (typeof source !== 'string') {
        throw new Error('input has to be a string.');
    }
    return source.substring(1) * 1;
}

console.log(extractCurrencyValue(PRICE));

extractCurrencyValue(PRICE); // 120

exports.extractCurrencyValue = extractCurrencyValue;
