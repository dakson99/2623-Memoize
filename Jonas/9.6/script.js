
// 1) destrukturiranje
// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavento 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHourse: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
}

// Ispisali smo prvi i treci element u nizu i na kraju obavezno ide rest patter poslje njega ne mozemo nista da dodajemo.
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// Sad sa objektina
const { sat, ...wekekdays } = restaurant.openingHourse
console.log(wekekdays);

// 2) funcije
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 8);
add(8, 2, 5, 3, 1, 6, 8);