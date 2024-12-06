const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHourse = {
    [days[3]]: {
        open: 12,
        close: 22,
    },
    [days[4]]: {
        open: 11,
        close: 23,
    },
    [days[6]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavento 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enchanced object literals
    openingHourse,

    orderPizza(mainIngredient, ...orherIngredient) {
        console.log(mainIngredient);
        console.log(orherIngredient);
    },

    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
}

// Promery NAMES
const promeries = Object.keys(openingHourse);
console.log(promeries);

let openStr = `We are open on ${promeries.length} days: `;
for (const day of promeries) {
    openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHourse);
console.log(values);

// Entire Object
const entries = Object.entries(openingHourse);
//console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}
