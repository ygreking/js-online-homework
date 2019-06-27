/**
 * Задача 1.
 *
 * Создайте функцию `f`, которая возвращает куб числа.
 *
 * Условия:
 * - Функция принимает один параметр;
 * - Функция содержит проверку входного параметра на тип number.
 */

// Решение
function f(n) {
    if (typeof n !== 'number') {
        throw new Error('parameter is not a number type');
    }

    return n * n * n; // Math.pow(n, 3);
}

console.log(f(2));
// console.log(f('Content'));

/* не удалять */
f(2); // 8
f('Content'); // Error: parameter is not a number type

export { f };
/* не удалять */
