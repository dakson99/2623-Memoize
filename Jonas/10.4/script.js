const flight = 'LH234'; // flight je primitivni tip
const darko = {
    name: 'Darko Mikavica',
    passport: 224325235235
}

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;

    if (passenger.passport === 224325235235) {
        alert('Checked in')
    } else {
        alert('Wrong passport!');
    }
}

//checkIn(flight, darko);
//console.log(flight);
//console.log(darko);

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(darko);
checkIn(flight, darko);