const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
console.log(ordersSet);

console.log(new Set('Darko'));

// Dobijanje velicine seta a kod niza se koristi length
console.log(ordersSet.size);
// Da li je odredjeni element u skupu i ovo je takodje metod, ovde ocekujemo true ili false
console.log(ordersSet.has('Pizza'));
console.log(ordersSet.has('Bread'));

// Skupu mozemo dodati elemente
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet);

// Brisanje
ordersSet.delete('Risotto');
console.log(ordersSet);

//ordersSet.clear();
//console.log(ordersSet);

// Iterable
for (const order of ordersSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [... new Set(staff)];
console.log(staffUnique);
console.log(
    new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('darkomikavica').size);