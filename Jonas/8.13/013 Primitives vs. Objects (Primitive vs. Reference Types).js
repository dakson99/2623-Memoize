/*
PRIMITIVE TYLES:
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. BigInt

REFERENCE TYPES:
1. Object literal
2. Arrays
3. functions
4. Many more...
Reference type se smestaju u HEAP, Primitive types se smestaju u CALL STACK. Pod tim mislim na one primitivne tipove koji se cuvaju u execution kontekstu u kojoj se deklarisu.
Varijable definisane sa const u primitive value su ne pomenive, ali u reference values se mogu menjati.

*/
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
    name: 'Jonas',
    age: 30,
};
const firend = me;
firend.age = 27;
console.log('Friend', firend);
console.log('Me', me);