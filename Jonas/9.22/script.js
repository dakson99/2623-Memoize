const airline = 'TAP Air Portugal';

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'DaRkO'; // Darko
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails
const email = 'darko@mikavica.io';
const loginEmail = '  Darko@Mikavica.Io \n';

//const lowerEmail = loginEmail.toLowerCase();
//const trimmedEmail = loginEmail.trim();
//console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

const priceGB = '288,97^';
const priceUS = priceGB.replace('^', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passengers come to bording door 23. Bording door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
// Kada god treba da donesemo odluku na osnovu sadrzaja u stringu ovde tri metode su korisne: includes, startsWith, endsWith
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
    console.log('Part of the NEW AIRbus familly');
}

const checkBaggeg = function (intem) {
    const baggag = intem.toLowerCase();
    if (baggag.includes('knife') || baggag.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard');
    }
}

checkBaggeg('I have a laptop, some Food and a pocket Knife');
checkBaggeg('Sock and camera');
checkBaggeg('Got some snacks and a gun for protection');
