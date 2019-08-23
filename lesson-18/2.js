/*
Улучшить класс `DB` из предыдущей задачи.

-   Добавить метод `find`, который будет возвращать массив пользователей которые удовлетворяют условие переданное в качестве параметра
-   Генерировать ошибку, если query не валидный
-   Поля `name` и `country` ищут 100% совпадение
-   Поля `age` и `salary` принимают объект в котором должны быть или 2 параметра `min` и `max` или хотя-бы один из них
-   Возвращать пустой массив если не удалось найти пользователей которые удовлетворяют объект запроса
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

    find(query) {
        if (typeof query !== 'object' || Array.isArray(query)) {
            throw new Error('Query object is not valid.');
        }
        const result = [];
        this.db.forEach((value, key) => {
            let match = true;
            for (const qkey of Object.keys(query)) {
                const qvalue = query[qkey];
                switch (qkey) {
                    case 'name':
                    case 'country':
                        if (qvalue !== value[qkey]) {
                            match = false;
                        }
                        break;

                    case 'age':
                    case 'salary':
                        const hasMin = typeof qvalue.min == 'number';
                        const hasMax = typeof qvalue.max == 'number';
                        if (!hasMin && !hasMax) {
                            throw new Error(
                                'Age and salary query fields must have at least one of min and max values.'
                            );
                        } else if (hasMin && !hasMax) {
                            if (value[qkey] < qvalue.min) match = false;
                        } else if (hasMax && !hasMin) {
                            if (value[qkey] > qvalue.max) match = false;
                        } else {
                            if (
                                value[qkey] < qvalue.min ||
                                value[qkey] > qvalue.max
                            )
                                match = false;
                        }

                        break;

                    default:
                        match = false;
                }
            }
            if (match) result.push(this.read(key));
        });
        return result;
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
const id2 = db.create({ name: 'Joe', age: 25, country: 'us', salary: 600 });

const query = {
    country: 'ua',
    age: {
        min: 21,
    },
    salary: {
        min: 300,
        max: 600,
    },
};

const customers = db.find(query); // массив пользователей
console.log('\nresults of query 1:\n', customers);

const customers2 = db.find({
    age: {
        min: 21,
    },
    salary: {
        min: 300,
        max: 600,
    },
}); // массив пользователей
console.log('\nresults of query 2:\n', customers2);
