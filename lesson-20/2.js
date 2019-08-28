// Улучшите класс Customers добавив функцию генератор.

// Обратите внимание:

// Класс Customers после этого должен работать идентично предыдущей задаче.

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

    *[Symbol.iterator]() {
        for (const item of this.db) {
            if (item.verified) yield item;
        }
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
