'use strict';
 
console.log('**********Task-3***********');

// Менеджер завдань: Створіть функцію яка створює та повертає обьект завдання. Об'єкт task, який буде містити властивості Name, deadline, priority та done. Додайте методи для відмітки завдання як виконаного та для виведення інформаціїпро завдання.

const returnTaskObject = (name, deadline, priority, done) => {
    return {
        name, deadline, priority, done,
        isDone() {
            this.done = true;
        },
        showInformation() {
            console.log(`Task name: ${this.name},\ndeadline: ${this.deadline}, \npriority: ${this.priority}, \ndone: ${this.done}`);
        },
    }
}

const task = returnTaskObject('header', '01.05.2024', 1, false);
task.isDone();
task.showInformation();


console.log('**********Task-4***********');

// Каталог товарів: Створіть каталог товарів, де кожен товар буде об'єктом з властивостями назва, ціна та кількість. Додайте методи для додавання товару, видалення товару та підрахунку загальної вартості.

const warehouse = {
    catalog: [
        { name: 'Teddy bear', price: 1500, quantity: 10 },
        { name: 'Panda', price: 2000, quantity: 15 }
    ],
    addNewitem(name, price, quantity) {
        this.catalog.push({ name, price, quantity });
    },
    isValiditem(name) {
        return this.catalog.some(item => item.name === name);
    },
    removeItem(name) {
        if (this.isValiditem(name)) {
            const searchedItem = this.catalog.find(item => item.name === name);
            this.catalog.splice(this.catalog.indexOf(searchedItem), 1);

        } else console.log("Invalid item's name");
    },
    calculateTotalPrice(name) {
         if (this.isValiditem(name)) {
            const searchedItem = this.catalog.find(item => item.name === name);
             return searchedItem.price * searchedItem.quantity;
        } else console.log("Invalid item's name");

    }
}

console.log(warehouse.calculateTotalPrice('Panda'));

console.log('**********Task-5***********');  
 

// Система реєстрації: Створіть систему реєстрації користувачів, де кожен користувач буде об'єктом з властивостями ім'я, email, пароль тощо. Додайте метод для перевірки введеного пароля при вході.
const signInSystem = {
    users: [],
    addNewUser(name, email, password) {
        this.users.push({name, email, password})
    },
    isCorrectPassword(email, password) {
        const user = this.users.find(user => user.email === email);
        if (user.password === password) {
            console.log(`Correct password`);
            return true;
        }
        console.log('Incorrect password');
        return false;
    }
}

console.log('**********Task-6***********');

// Онлайн-книга: Створіть програму для ведення списку прочитаних книг. Кожна книга буде об'єктом з властивостями назва, автор, рік видання та прочитано (true/false). Додайте методи для відмітки книги як прочитаної та виведення статистики про прочитані книги.

const books = {
    list: [
        { name: "The Selfish Gene", author: 'Richard Dawkins', year: 1976, isRead: false },
        { name: "Surely You're Joking, Mr. Feynman!", author: 'Richard Feynman', year: 1985, isRead: false },
        
    ],
    isValidiBook(name) {
        return this.list.some(book => book.name === name);
    },
    markAsRead(name) {
        if (this.isValidiBook(name)) {
            this.list.forEach(book => {
                if (book.name === name) book.isRead = true;
            });
        } else console.log(`Book ${name} has not found in the list`);
    },
    showStatisticsOfRead() {
        const numberOfRead = this.list.reduce((accamulator, { isRead }) => isRead ? (accamulator + 1) : accamulator, 0);
        console.log(`${numberOfRead} of ${this.list.length} books are read`);
    }
}
books.markAsRead('The Selfish Gene');
books.showStatisticsOfRead();

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

console.log('**********Task-7***********'); 
const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
    transactions: [],
  

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
    createTransaction(amount, type) {
        return { id: this.transactions.length, type, amount };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
    withdraw(amount) {
        if (amount > this.balance) console.log(`Can't be proceed. Not enough money on your balance`)
        else balance -= amount;
       
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
  },

  /*
   * Метод возвращает текущий баланс
   */
    getBalance() {
        return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
    getTransactionDetails(id) {
        return this.transactions.find(transaction => transaction.id === id);
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
    getTransactionTotal(type) {
        return this.transactions.reduce((accamulator, transaction) => transaction.type === type ? transaction.amount : accamulator, 0);
  },
};