// Создайте класс Countries который при создании своего экземпляра принимает один параметр в с типом строка. Этот параметр будет служить API эндпоинтом.

// У класса Countries должен быть один метод send который должен возвращать промис.

// А принимает метод send один параметр который должен быть по типу number и который потом будет использоваться как значение для GET query-параметра size.

// Обратите внимание:

// Метод send должен возвращать промис.
// Использование async & await внутри класса запрещено.
// Использование посторонних библиотек кроме библиотеки fetch запрещено
// Если сервер ответил статус кодом 200 промис должен возвращать массив который содержит список объектов-стран.
// В том случае если сервер ответил статус кодом не 200 промис должен генерировать ошибку с текстом We have error, status code: ${statusCode}
// Генерировать ошибку если url по типу не строка.
// Генерировать ошибку если методу send передать по типу не число.

const get = require('fetch').fetchUrl;

class Countries {
    constructor(url) {
        this.url = url;
    }

    send(size) {
        return new Promise((resolve, reject) => {
            if (typeof this.url !== 'string') {
                reject('URL has to be a string');
            }
            if (typeof size !== 'number') {
                reject('Size argument has to be a number');
            }
            get(url + '?size=' + size, (error, meta, body) => {
                if (meta.status === 200) {
                    const { data } = JSON.parse(body);
                    resolve(data);
                } else {
                    reject(`We have error, status code: ${meta.status}`);
                }
            });
        });
    }
}

const url = 'https://lab.lectrum.io/geo/api/countries';
const countries = new Countries(url);

(async () => {
    try {
        const data = await countries.send(2);
        console.log(data); // массив стран
    } catch (error) {
        console.log(error);
    }
})();
