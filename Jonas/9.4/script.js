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
};

// Klasican primer destrukturiranja
const { name, openingHourse, categories } = restaurant;
console.log(name, openingHourse, categories);

const { name: restaurantName, openingHourse: hours, categories: tags } = restaurant;
console.log(restaurantName, hours, tags);

// Ovde je pokazano destrukturiranje ali je dodata podrazumevana vrednost
// viticaste zagrade da se postavi prazna vrednost, jer u ovom primeru nemamo nista pod name svojstvom, kad bi u name izbrisali [] dobili bi undefine
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);