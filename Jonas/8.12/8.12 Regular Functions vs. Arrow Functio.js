/*
Promenljive deklarisane sa VAR stvaraju svosjtvo na globalnom objektu.
U ovom slucaju smo stavili var firstname Matilda i radilo je ali to ne treba koristit kda
U praksi nikada ne bi trebalo da koristmo arrow funkciju kao metod.

*/
var firstName = 'Matilda';
const Darko = {
    firstName: 'Darko',
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

Darko.greet();
console.log(this.firstName);

