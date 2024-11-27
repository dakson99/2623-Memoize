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

    orderPizza: function (mainIngredient, ...orherIngredient) {
        console.log(mainIngredient);
        console.log(orherIngredient);
    },
}

console.log('---OR---');
// Use ANY data type, return ANY data type,short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Helo' || 23 || null);

//restaurant.numGuests = 23;
const guestes1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guestes1);

// Ovde ako ukljucimo ovaje gornji deo koda gde je 23 dobicemo 23 a ne 10 jer je restaurant.numGuests true 23.
const guestes2 = restaurant.numGuests || 10;
console.log(guestes2);

console.log('---AND---');