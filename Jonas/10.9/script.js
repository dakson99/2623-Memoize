const lufthausa = {
    airline: 'Lufthausa',
    iataCode: 'LH',
    bookings: [],
    //book: function() {}
    book(flightNum, name) {
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const swiss = {
    airline: 'Swiss AIr Lines',
    iataCode: 'LX',
    bookings: [],
};

const book = lufthausa.book;

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthausa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Darko Mikaivca');
bookEW23('Martha Cooper');

// With Event Listeners
lufthausa.planes = 300;
lufthausa.buyPlane = function () {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}
//lufthausa.buyPlane();

//document.querySelector('.buy').addEventListener('click', lufthausa.buyPlane.bind(lufthausa));

// Partial application, za ovo unapred mozemo postaviti parametre
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = values => values + values * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));