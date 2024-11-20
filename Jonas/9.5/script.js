'use strict';
// Kreirali smo niz i drugi niz koji je isti kao prvi samo ispred njega dodati 2 broja. Ovo mozemo uraditi tako sto predjemo preko niza ili jos gore da se rucno unese.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Pomocu spred operatora, dakle koristimo ... da u osnovi prosirino ovaj niz u sve pojedinacne elemente. Kda bi napisali arr bez tri tacke imali bi smo 1, 2 i unutra ovaj drugi niz. Dakle bez tackica on ukljucuje niz a sa spred operatorom vadi sve elemente iz niza i pise ih rucno.
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

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

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        address,
    }) {
        console.log(
            `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, 
        ${ing3}`);
    }
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Kopiranje niza
const mainMenuCopy = [...restaurant.mainMenu];

// Spajanje 2 niza
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);

const ingrediants = [
    //prompt("Let's make pasta! Inrediant 1?"), 
    //prompt("Ingrediant 2?"), 
    //prompt("Ingrediant 3?")
];
console.log(ingrediants);

// Isto napisano
restaurant.orderPasta(ingrediants[0], ingrediants[1], ingrediants[2]);
restaurant.orderPasta(...ingrediants);

//Objekti, kao sto smo imali ovaj primer const newArr = [1, 2, ...arr]; samo da napravimo novi objekat sa restoranima sa original podacima plus dodatni podaci.
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


