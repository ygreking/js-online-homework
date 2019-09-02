// Создайте функцию send которая будет оберткой для функции get которая поддерживает только callback технологию.

// Обратите внимание:

// Функция send должна возвращать промис;
// Использование async & await запрещено.
// Нужно использовать библиотеку для отправки запросов fetch
// Использование посторонних библиотек кроме библиотеки fetch запрещено.
// Если сервер ответил статус кодом 200 промис должен резолвиться с параметром, аргументом для которого будет массив который содержит список объектов-стран.
// В том случае если сервер ответил статус кодом не 200 промис должен реджектится с текстом We have error, status code: ${statusCode}

const get = require('fetch').fetchUrl;

function send(url) {
    return new Promise((resolve, reject) => {
        get(url, (error, meta, body) => {
            if (meta.status === 200) {
                const { data } = JSON.parse(body);
                resolve(data);
            } else {
                reject(`We have error, status code: ${meta.status}`);
            }
        });
    });
}

// После рефакторинга

const url = 'https://lab.lectrum.io/geo/api/countries?size=2';

send(url)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
