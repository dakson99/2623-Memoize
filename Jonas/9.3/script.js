'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavento 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vagetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const arr = [2, 3, 4];
// Ako bi hteli da vratimo niz bez destrukturiranja 
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Sa destrukturiranjem
// Dakle sintaksa izgleda ovako, prvi element je x, drugi element y i treci z i tako ovde destrukturira ovaj niz arr.
const [x, y, z] = arr;
console.log(x, y, z);

const [first, second] = restaurant.categories;
console.log(first, second);

// Ako hocemo da uzmemo prvu i trecu kategoriju
const [firstt, , secondd] = restaurant.categories;
console.log(firstt, secondd);

// Promena kategorija, npr prva da bude vegeraina a prva italian, moramo promeniti u let jer 
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

// Isto ovaj primer odozgo samo upotrebom destruturiranja
[main, secondary] = [secondary, main];
console.log(main, secondary)

// Ovde smo dodali metodu order, primemo 2 promenljive vrednosti iz funkcije 
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Ugnjezdeni niz
const nested = [2, 4, [5, 6]];
//const [i, , j] = nested;
//console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);