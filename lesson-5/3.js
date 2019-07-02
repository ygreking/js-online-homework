/**
 * Задача 3.
 *
 * Создайте функцию truncate(string, maxLength).
 * Функция проверяет длину строки string.
 * Если она превосходит maxLength – заменяет конец string на ... таким образом, чтобы её длина стала равна maxLength.
 * Результатом функции должна быть (при необходимости) усечённая строка.
 *
 * Условия:
 * - Функция принимает два параметра;
 * - Функция содержит валидацию входных параметров;
 * - Первый параметр должен обладать типом string;
 * - Второй параметр должен обладать типом number.
 */

// Решение
function truncate(string, maxLength) {
    if (typeof string !== 'string') {
        throw new Error('first parameter has to be a string.');
    }
    if (typeof maxLength !== 'number') {
        throw new Error('second parameter has to be a number.');
    }
    if (string.length > maxLength) {
        return `${string.substring(0, maxLength - 3)}...`;
    } else {
        return string;
    }
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 21));

truncate('Вот, что мне хотелось бы сказать на эту тему:', 21); // 'Вот, что мне хотел...'

exports.truncate = truncate;
