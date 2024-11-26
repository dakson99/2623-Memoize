// destrukturiranje Spread
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST
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

    orderPizza: function (mainIngredient, ...otherIntegredient) {
        console.log(mainIngredient);
        console.log(otherIntegredient);
    }
}

// ispisivanje prvog i treceg elementa u nizu i na kraju niza obavezno ide rest pattern
const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood);

// sad sa objektima
const { sat, ...wekedays } = restaurant.openingHourse
console.log(wekedays);

// function
const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++)
        sum += numbers[i];
    console.log(sum);
}
add(2, 3);
add(5, 3, 7, 8);

restaurant.orderPizza('mashrooms', 'onion', 'olives', 'spinach');

