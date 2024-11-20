// Kreirali smo niz i drugi niz koji je isti kao prvi samo ispred njega dodati 2 broja. Ovo mozemo uraditi tako sto predjemo preko niza ili jos gore da se rucno unese.
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//Pomocu spred operatora, dakle koristimo ... da u osnovi prosirino ovaj niz u sve pojedinacne elemente.
const newArr = [1, 2, ...arr];
console.log(newArr);