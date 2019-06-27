/**
 * Задача 2.
 *
 * Создайте функцию `f`, которая возвращает сумму всех параметров.
 *
 *
 * Условия:
 * - Функция принимает любое количество параметров;
 * - Функция содержит проверку входных параметров на тип number.
 */

// Решение
function f() {
    let sum = 0;

    for (const value of arguments) {
        if (typeof value !== 'number') {
            throw new Error('all parameters should be a Number type');
        }
        sum += value;
    }

    return sum;
}

console.log(f(1, 2, 3)); // 6
console.log(f(1, 1, 1, 1, 1, 1, 1, 1)); // 8
// console.log(f(1, 2, 's', 4)); // Error: all parameters should be a Number type

/* не удалять */
f(1, 2, 3); // 6
f(1, 1, 1, 1, 1, 1, 1, 1); // 8
f(1, 2, 's', 4); // Error: all parameters should be a Number type

export { f };
/* не удалять */
