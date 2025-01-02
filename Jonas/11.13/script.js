const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposited = movements.filter(function (mov, i, arr) {
    return mov > 0;
});
console.log(movements);
console.log(deposited);

// Same as previous lines of code
const depositedFor = [];
for (const mov of movements) if (mov > 0) depositedFor.push(mov);
console.log(depositedFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);