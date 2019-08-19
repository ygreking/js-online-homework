/**
 * Задача 1.
 *
 * Напишите функцию postpone, которая выводит в консоль счетчик с задержкой.
 *
 * Функция принимает 3 параметра:
 * - Первый параметр `start` — число, c которого начнется отсчет;
 * - Второй параметр `end` — верхний порог, до которого будет идти отсчет;
 * - Третий параметр `delay` — это время в `мс` между выводами.
 *
 * Условия:
 * - Функция принимает три параметра;
 * - Функция содержит валидацию входных параметров на тип number;
 * - Обязательно использование таймера setTimeout и цикла for;
 * - Функция должна уметь считать в обе стороны.
 */

// Решение

function postpone(start, end, delay) {
    if (
        typeof start !== 'number' ||
        typeof end !== 'number' ||
        typeof delay !== 'number'
    ) {
        throw new Error('Both counter values and delay have to be numbers');
    }

    const roundedStart = Math.round(start);
    const roundedEnd = Math.round(end);
    const dirUp = roundedStart < roundedEnd;
    const total =
        (dirUp ? roundedEnd - roundedStart : roundedStart - roundedEnd) + 1;

    for (let i = 0; i < total; i++) {
        setTimeout(() => {
            console.log(dirUp ? roundedStart + i : roundedStart - i);
        }, delay * (i + 1));
    }
}

postpone(1, 3, 1000);
// 1
// 2
// 3
postpone(3, 1, 1000);
// 3
// 2
// 1

exports.postpone = postpone;
