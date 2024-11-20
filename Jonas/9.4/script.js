'use strict';

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

    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
        );
    }
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Solde, 21',
    mainIndex: 2,
    starterIndex: 2,
});

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,
});

// Klasican primer destrukturiranja
const { name, openingHourse, categories } = restaurant;
console.log(name, openingHourse, categories);

const { name: restaurantName, openingHourse: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Ovde je pokazano destrukturiranje ali je dodata podrazumevana vrednost
// viticaste zagrade da se postavi prazna vrednost, jer u ovom primeru nemamo nista pod name svojstvom, kad bi u name izbrisali [] dobili bi undefine
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);

//Mutirajuce varijable pri destrukturiranju objekta 
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Ugnezdeni objekat
const { fri: { open: o, close: c } } = openingHourse;
console.log(o, c);