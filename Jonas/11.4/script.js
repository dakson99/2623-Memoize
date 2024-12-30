const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]); //Ovako se vadi vrednost iz niza
console.log(arr.at(-1));

// AKo zelomo da brojimo od kraja niza onda koristiti 'at' metod, ako zelimo da uradimo nesto sto se zove 'ulancavanje metoda' at metod je odlican za to. Sa druge strane ako zelimo da dobijemo vrednost iz niza na primer prvi element onda mozemo nastaviti sa koriscenjem zapisa u zagradama.

console.log('Darko'.at(0));
console.log('Darko'.at(-1));