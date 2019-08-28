// Создайте класс Customers который умеет работать с механизмом for of.

// Класс Customers содержит метод add который принимает объект в качестве параметра. У этого объекта есть обязательное поле name и необязательное поле verified.

// Класс Customers при переборе с помощью for of должен учитывать только объекты у которых был установлен флаг verified: true.

// Обратите внимание:

// Использование генераторов запрещено.
// Использование посторонних библиотек запрещено
// У класса Customers должен быть метод Symbol.iterator

class Customers {
    constructor() {
        this.db = [];
    }

    add(obj) {
        if (typeof obj.name !== 'string') {
            throw new Error('Name is required');
        }
        this.db.push(obj);
    }

    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                let value;
                const done = i >= this.db.length;
                if (done !== true) {
                    do {
                        value = this.db[i++];
                    } while (value.verified !== true);
                } else value = undefined;
                return { value, done };
            },
        };
    }
}

const customers = new Customers();
customers.add({ name: 'Alex' });
customers.add({ name: 'Victor' });
customers.add({ name: 'Marcus' });
customers.add({ name: 'Andrii', verified: true });
customers.add({ name: 'Marco', verified: true });
customers.add({ name: 'Oliver' });
customers.add({ name: 'Lisa', verified: true });
customers.add({ name: 'John' });
customers.add({ name: 'Ivan', verified: true });

for (const customer of customers) {
    console.log(customer);
}
