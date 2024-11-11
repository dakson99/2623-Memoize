const Darko = {
    firstName: 'Darko',
    year: 1999,
    calcAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    },

    greet: () => console.log(`Hey ${this.firstName}`),
};

Darko.greet();