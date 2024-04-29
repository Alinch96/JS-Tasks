'use strict';

console.log('**********Task-1***********');


// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

const person = {
  name: 'Alex', age: 25, position: 'product-manager',
};

console.log(person.name);
person.age = 35;
person['working-place'] = "IT company";
console.log(person);
delete person.position;
console.log(('position' in person));
const friend = { name: 'Misha', age: 27, position: 'developer', };
person.friend = friend;
console.log(person.friend);
for (const key of Object.keys(person)) {
  if (typeof person[key] === 'object') {
    console.log(key + ':\n');
    for (const key1 of Object.keys(person[key])) {
      console.log(`${key1}-${person[key][key1]}`);
    }
  }
  else console.log(`${key}-${person[key]}`);
}

person.greeting = function () {
  console.log(`${this.name}, hello!`)
}

person.greeting();

console.log(Object.keys(person));

/////////////////////////////////////////////////////////////////////////////////////////////////

console.log('**********Task-2***********');
// Написати систему контролю банку.

// Властивості:
// - список користувачів [userId, FIO,'password']
// - список рахунків [userId, accountNumber, value]

// Методи:
// - додати користувача
// - видалити користувача

// - створити рахунок
// - видалити рахунок

// - додати гроші на рахунок
// - зняти гроші з рахунка

const bank = {
  users: [
    { userId: 0, FIO: 'Василенко Василь Васильович', password: '123483', },
    { userId: 1, FIO: 'Петренко Петро Петроович', password: '123483', }
  ],
  accounts: [
    { userId: 0, accountNumber: 1234, value: 10000 },
    { userId: 1, accountNumber: 1235, value: 15000 }
  ],
  
  addUser(newUser) {
    this.users.push(newUser);
  },
  removeUser(user) {
    if (this.users.includes(user)) this.user.splice(this.users.indexOf(user), 1);
  },
  createAccount(newAccount) {
    this.accounts.push(account);
  },
  isValidAccount(accountNumber) {
    return this.accounts.some(account => account.accountNumber === accountNumber);
  },

  addMoneyToAccount(accountNumber, value) {
    if (this.isValidAccount(accountNumber)) {
      this.accounts.forEach(account => {
        if (account.accountNumber === accountNumber) account.value += value;
      });
    } else console.log(`Акаунту ${accountNumber} не знайдено`);
  },
  withdrawMoneyFromAccount(accountNumber, value) {
    if (this.isValidAccount(accountNumber)) {
      this.accounts.forEach(account => {
        if (account.accountNumber === accountNumber) account.value -= value;
      });
    } else console.log(`Акаунту ${accountNumber} не знайдено`);
  },
};

bank.withdrawMoneyFromAccount(1234, 500);
console.log(bank.accounts[0]);
bank.addMoneyToAccount(1236, 500);


