const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// accumulator -> SNOWBALL
//const balance = movements.reduce(function (acc, cur, i, arr) {
//    console.log(`Iteration ${i}: ${acc}`);
//    return acc + cur;
//}, 0);
//console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);


'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
};

const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';

    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

    movs.forEach(function (mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';

        const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;

        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
}

const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
}

const calcDisplaySummary = function (acc) {
    const income = acc.movements
        .filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;

    const out = acc.movements
        .filter(mov => mov < 0)
        .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(out)}€`;

    const interest = acc.movements
        .filter(mov => mov > 0)
        .map(deposite => (deposite * acc.interestRate) / 100)
        .filter((int, i, arr) => {
            console.log(arr);
            return int >= 1;
        })
        .reduce((acc, inc) => acc + inc, 0);
    labelSumInterest.textContent = `${interest}€`;
}

const createUsernames = function (accs) {
    accs.forEach(function (acc) {
        acc.username = acc.owner
            .toLowerCase()
            .split(' ')
            .map(name => name[0])
            .join('');
    });
};
createUsernames(accounts);

const updateUI = function (acc) {
    // Display movements
    displayMovements(acc.movements);
    //Display balance
    calcDisplayBalance(acc);
    //Display summary
    calcDisplaySummary(acc);
}

//Event handler
let currentAccount;

btnLogin.addEventListener('click', function (e) {
    //Prevent form from submitting
    e.preventDefault();

    currentAccount = accounts.find(
        acc => acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);

    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        // Display UI and message
        labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 100;

        // Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        // Update UI
        updateUI(currentAccount);
    }
});

btnTransfer.addEventListener('click', function (e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiveAcc = accounts.find(
        acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (amount > 0 &&
        receiveAcc &&
        currentAccount.balance >= amount && receiveAcc?.username !== currentAccount.username
    ) {
        // Doint the transfer
        currentAccount.movements.push(-amount);
        receiveAcc.movements.push(amount);

        //Update UI
        updateUI(currentAccount);
    }
});

btnLoan.addEventListener('click', function (e) {
    const amount = Number(inputLoanAmount.value);

    if (amount > 0 && currentAccount.movements.some(mov => mov => amount * 0.1)) {
        // Add movement
        currentAccount.movements.push(amount);

        // Update UI
        updateUI(currentAccount);
    }
    inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
    e.preventDefault();

    if (inputCloseUsername.value === currentAccount.username &&
        Number(inputClosePin.value) === currentAccount.pin
    ) {
        const index = accounts.findIndex(
            acc => acc.username === currentAccount.username
        );
        console.log(index);

        //Delete account
        accounts.splice(index, 1);

        //Hide UI
        containerApp.style.opacity = 0;
    }

    inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

/////////////////////////////////////////////////

// Maximum value of the array
const max = movements.reduce((acc, mov) => {
    if (acc > mov)
        return acc;
    else
        return mov;
}, movements[0]);
console.log(max);

const euroToUsd = 1.1;
const totalDepositeUSD = movements.filter(mov => mov > 0).map(mov => mov * euroToUsd).reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositeUSD); // reduce ovde vraca broj, ako prvi vraca niz a ovde vreaca onda ide lancano vracanje znaci poslednji je broj.

console.log(movements);
// Ovde se proverava jednakost
console.log(movements.includes(-130));

// SOME: Ovde se proverava uslov
const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separe callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//Prvi nacin
/*const accountMOvements = accounts.map(acc => acc.movements);
console.log(accountMOvements);
const allMovements = accountMOvements.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);*/

// Drugi nacin
const overalBalance = accounts.map(acc => acc.movements).flat().reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// Umesto flat imamo i flatMap ali on ide samo u prvi novo dubine, ako trebamo da idemo dublje moramo koristit flat() metodu a ne flatMap().
const overalBalance2 = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

movements.sort((a, b) => b - a);
console.log(movements);


const arrr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Empty arrays + fill methods
const x = new Array(7);
console.log(x);
//console.log(x.map(() => 5));
//x.fill(1);

x.fill(1, 3);
console.log(x);

arrr.fill(23, 2, 6);
console.log(arrr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
    const movementsUI = Array.from(
        document.querySelectorAll('.movements__value'),
        el => Number(el.textContent.replace('e', ''))
    );

    console.log(movementsUI);

    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});

// 1.
const bankDepositeSum = accounts
    .flatMap(acc => acc.movements)
    .filter(mov => mov > 0)
    .reduce((sum, cur) => sum + cur, 0);

console.log(bankDepositeSum);

// 2.
// const numDeposits1000 = accounts
//    .flatMap(acc => acc.movements)
//    .filter(mov => mov >= 1000).length;

const numDeposits1000 = accounts
    .flatMap(acc => acc.movements)
    .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// Prefixed ++ operator
// let a = 10;
// console.log(++a);
// console.log(a);