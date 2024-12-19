// Kako callBack funckiju pozvati manualno i zbog cega to radimo
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

lufthausa.book(239, 'Darko Mikavica');
lufthausa.book(341, 'John Smith');
console.log(lufthausa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthausa.book;

// Does NOT work
//book(23, 'Sarah Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthausa, 239, 'Mary Cooper');
console.log(lufthausa);

const swiss = {
    airline: 'Swiss AIr Lines',
    iataCode: 'LX',
    bookings: [],
};

book.call(swiss, 574, 'Mary Cooper');
console.log(swiss);

// Applay old method
const flightData = [521, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// Best solution, same as previous lines of code
book.call(swiss, ...flightData);
