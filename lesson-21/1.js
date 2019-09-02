// Создайте функцию isCustomerVerified которая умеет проверять объект customer на валидность.

// Валидным объект customer считается только в том случае когда у него установлен флаг verified: true.

// Обратите внимание:

// Функция isCustomerVerified должна возвращать промис;
// Использование async & await запрещено;
// Использование посторонних библиотек запрещено;
// В том случае если объект валидный промис резолвится с одним параметром, аргументом для которого будет true;
// В том случае если объект невалидный промис реджектится с текстом Customer is not verified.

function isCustomerVerified(person) {
    return new Promise((resolve, reject) => {
        if (person.verified) {
            resolve(true);
        } else reject('Customer is not verified');
    });
}

const personFirst = {
    name: 'Oliver',
    verified: true,
};

const personSecond = {
    name: 'Alex',
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error));

isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)); // Customer is not verified
