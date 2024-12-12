// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Darko Mikavica'.split(' '));

const [firstName, LastName] = 'Darko Mikavica'.split(' ');

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
    const names = name.split(' ');
    const nameUpper = [];
    for (const n of names) {
        //nameUpper.push(n[0].toUpperCase() + n.slice(1));
        nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(nameUpper.join(' '));
};

capitalizeName('jassica ann smith davids');
capitalizeName('darko mikavica');

// DOdavanje stringova sve dok niz ne dobija duzinu
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Darko'.padStart(20, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(53243788));
console.log(maskCreditCard(325232235325475476834));
console.log(maskCreditCard('3253576576324123324654756'));

// Repeat
const message2 = 'Bad weather... All Departues Delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛬'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);