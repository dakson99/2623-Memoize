const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHourse = {
    [weekday[3]]: {
        open: 12,
        close: 22,
    },
    [weekday[4]]: {
        open: 11,
        close: 23,
    },
    [weekday[6]]: {
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