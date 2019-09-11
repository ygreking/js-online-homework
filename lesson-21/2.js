// Создайте функцию getCustomers которая умеет объединять 2 массива с объектами.

// Операция объединения происходит по ключу id и только для объектов у которых установлен флаг verified: true.

// Обратите внимание:

// Функция getCustomers должна возвращать промис;
// Использование async & await запрещено;
// Использование посторонних библиотек запрещено;
// В том случае если в массиве countries отсутствует необходимый id промис должен реджектится с текстом We don't have information about country for this customer: ${customer.name};
// Склеивание происходит только для объектов с флагом verified: true.

function getCustomers(customers, countries) {
    const result = [];
    return new Promise((resolve, reject) => {
        for (const customer of customers) {
            if (customer.verified) {
                const country = countries.find(item => item.id === customer.id);
                if (!country) {
                    reject(
                        `We don't have information about country for this customer: ${customer.name}`
                    );
                } else {
                    result.push({ ...customer, ...country });
                }
            }
        }
        resolve(result);
    });
}

const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true,
    },
    {
        id: 'A2',
        name: 'alex',
    },
];

const countries = [
    {
        id: 'A1',
        country: 'usa',
    },
    {
        id: 'A2',
        country: 'poland',
    },
];

getCustomers(customers, countries)
    .then(customers => console.log(customers))
    .catch(error => console.log(error));
