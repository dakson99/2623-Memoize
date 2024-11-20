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
};

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Kopiranje niza
const mainMenuCopy = [...restaurant.mainMenu];

// Spajanje 2 niza
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
