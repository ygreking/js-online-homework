/**
 * Задача 4.
 *
 * Сделайте функцию `f`, которая принимает параметром число от 1 до 7,
 * а затем возвращает день недели на русском языке.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 * - Входной параметр должен быть числом от 1 до 7.
 */

// Решение
function f(n) {
    const weekdays = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье',
    ];

    if (typeof n !== 'number') {
        throw new Error('parameter type is not a Number');
    } else if (n < 1 || n > 7) {
        throw new Error('parameter should be in the range of 1 to 7');
    }

    return weekdays[n - 1];
}

console.log(f(1));
console.log(f(2));
// console.log(f(8)); // Error: parameter should be in the range of 1 to 7
// console.log(f('1')); // Error: parameter type is not a Number

/* не удалять */
f(1); // Воскресенье
f(2); // Понедельник
f(8); // Error: parameter should be in the range of 1 to 7
f('1'); // Error: parameter type is not a Number

export { f };
/* не удалять */
