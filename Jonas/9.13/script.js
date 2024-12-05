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

if (restaurant.openingHourse.fri)
    console.log(restaurant.openingHourse.fri.open);

// WITH opcional chaining
console.log(restaurant.openingHourse.mon?.open);

const weekday = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of weekday) {
    const open = restaurant.openingHourse[day]?.open ?? 'closed';
    console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderPizza?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Darko', email: 'hello@darko.io' }];
//const users = [];

console.log(users[0]?.name ?? 'User array empty');