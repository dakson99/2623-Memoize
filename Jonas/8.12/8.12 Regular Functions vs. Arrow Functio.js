/*
Promenljive deklarisane sa VAR stvaraju svosjtvo na globalnom objektu.
U ovom slucaju smo stavili var firstname Matilda i radilo je ali to ne treba koristit kda
U praksi nikada ne bi trebalo da koristmo arrow funkciju kao metod.
Kada bi koristili regularnu funkciju umesto arrow i sada metodaa greet
dobija svoju this keyword
Pravimo funkciju koja ce u osnovi vratiti ako je osoba milenium
Posotje dva resenja za ovaj problem:
Prva solucija jeste koriscenjem dodatne promenljive koju nazivamo self koja ide van funkcije, jer ovako smo van isMillenial funckije. Ovo je bilo resenje pre ES6 

*/
// var firstName = 'Matilda';
const Darko = {
    firstName: 'Darko',
    year: 1999,
    calcAge: function () {
        // console.log(this);
        console.log(2037 - this.year);

        const self = this;
        const isMillenial = function () {
            console.log(self);
            console.log(self.year >= 1992 && self.year <= 2007);
        };
        //console.log(this.year >= 1992 && this.year <= 2007); };
        isMillenial();
    },

    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
};

Darko.greet();
Darko.calcAge();

