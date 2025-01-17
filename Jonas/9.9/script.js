const rest1 = {
    name: 'Capri',
    //numGuests: 20,
    numGuests: 0,
};

const rest2 = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// Ovaj primer radi tako sto rest 1 da li je jedank sa rest 1 jeste i u prvom slucaju vraca 20 posto je numGuests 20, a u drugomj liniji koda numGuests nije = sa rest2numGuests i preskace to i ide na sledece to je false vrenost 10.
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//Ovo je isto napisano kao primer iznad
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assigment operator (null or undefinde)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assigment operator
// rest1.owner = rest1.owner && '<ANONYMUS>';
// rest2.owner = rest2.owner && '<ANONYMUS>';
rest1.owner &&= '<ANONYMUS>';
rest2.owner &&= '<ANONYMUS>';


console.log(rest1);
console.log(rest2);
