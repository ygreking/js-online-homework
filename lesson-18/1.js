/*
Создать класс `DB` который будет имплементировать `CRUD` модель.

-   В качестве структуры данных использовать `Map`.
-   Метод `create`:
-   -   принимает объект и валидирует его, в случае невалидности объекта – генерирует ошибку.
-   -   возвращает `id`
-   -   при создании пользователя генерирует уникальный `id`, который является ключом для объекта пользователя в структуре `Map`
-   Метод `read`:
-   -   принимает идентификатор пользователь
-   -   если такого пользователя нет возвращать `null`
-   -   если есть — возвращать объект пользователя с полем `id` внутри объекта.
-   -   если в метод `read` передать не строку, или не передать параметр вообще — генерировать ошибку.
-   Метод `readAll`:
-   -   возвращает массив пользователей
-   -   генерировать ошибку если в метод `readAll` передан параметр
-   Метод `update`:
-   -   обновляет пользователя
-   -   принимает 2 обязательных параметра
-   -   генерирует ошибку если передан несуществующий `id`
-   -   генерирует ошибку если передан `id` с типом не строка
-   -   генерирует ошибку если второй параметр не валидный
-   Метод `delete`:
-   -   удаляет пользователя
-   -   Генерировать ошибку если передан в метод `delete` несуществующий или невалидный `id`
*/

class DB {
    constructor() {
        this.db = new Map();
    }

    generateId() {
        let id;
        do {
            id = `f${Math.floor(+new Date() * Math.random()).toString(16)}`;
        } while (this.db.has(id));

        return id;
    }

    create(person) {
        if (typeof person !== 'object' || Array.isArray(person)) {
            throw new Error('Person object is not valid.');
        } else if (typeof person.name !== 'string') {
            throw new Error(
                'Person object must have name property of string type.'
            );
        } else if (typeof person.age !== 'number') {
            throw new Error(
                'Person object must have age property of number type.'
            );
        } else if (typeof person.country !== 'string') {
            throw new Error(
                'Person object must have country property of string type.'
            );
        } else if (typeof person.salary !== 'number') {
            throw new Error(
                'Person object must have salary property of number type.'
            );
        }

        const id = this.generateId();
        this.db.set(id, person);
        return id;
    }

    read(id) {
        if (arguments.length < 1 || typeof id !== 'string') {
            throw new Error('String id is required to get person data.');
        }
        if (this.db.has(id)) {
            const person = { id, ...this.db.get(id) };
            return person;
        } else {
            return null;
        }
    }

    readAll() {
        if (arguments.length > 0) {
            throw new Error("Function doesn't expect parameters.");
        }
        const data = [];
        this.db.forEach((value, key) => {
            const person = { id: key, ...value };
            data.push(person);
        });
        return data;
    }

    update(id, data) {
        if (typeof id !== 'string') {
            throw new Error('Type of id has to be string.');
        } else if (this.db.has(id) !== true) {
            throw new Error("Provided id doesn't exist in the database.");
        } else if (typeof data !== 'object' || Array.isArray(data)) {
            throw new Error('Data object is not valid.');
        }
        this.db.set(id, { ...this.db.get(id), ...data });
        return id;
    }

    delete(id) {
        if (typeof id !== 'string') {
            throw new Error('Type of id has to be string.');
        } else if (this.db.has(id) !== true) {
            throw new Error("Provided id doesn't exist in the database.");
        }
        return this.db.delete(id);
    }
}

const db = new DB();

const person = {
    name: 'Pitter', // обязательное поле с типом string
    age: 21, // обязательное поле с типом number
    country: 'ua', // обязательное поле с типом string
    salary: 500, // обязательное поле с типом number
};

const id = db.create(person);
const id2 = db.create({ name: 'Joe', age: 25, country: 'us', salary: 1000 });
console.log('\nid:', id);
console.log('\nid2:', id2);

const customer = db.read(id);
console.log('\ncustomer:\n', customer);

const customers = db.readAll(); // массив пользователей
console.log('\ncustomers:\n', customers);

db.update(id, { age: 22 }); // id
console.log('\nupdated customer:\n', db.read(id));

db.delete(id); // true
console.log('\ndeleted one person:\n', db.readAll());
