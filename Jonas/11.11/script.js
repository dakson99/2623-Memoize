const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1
const movementsUSD = movements.map(function (mov) {
    return mov * eurToUsd;
    //return 23; u svakoji iteraciji originalnog niza jednostavno stavi 23 u svaki niz na istoj poziciji. 
});
console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);