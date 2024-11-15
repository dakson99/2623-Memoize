/*

Dizajnirajte klasu kalkulatora. Čas treba da obezbedi matematičke operacije sabiranja, oduzimanja, množenja, deljenja i stepenovanja. Takođe bi trebalo da omogući da se uzastopne operacije izvode korišćenjem ulančavanja metoda. Konstruktor klase Calculator treba da prihvati broj koji služi kao početna vrednost rezultata.

Vaša klasa Kalkulator treba da ima sledeće metode:

add - Ovaj metod dodaje datu vrednost broja u rezultat i vraća ažurirani kalkulator.
oduzmi – Ovaj metod oduzima datu vrednost broja od rezultata i vraća ažurirani kalkulator.
multipli – Ovaj metod množi rezultat sa datom vrednošću broja i vraća ažurirani kalkulator.
podeli – Ovaj metod deli rezultat sa datom vrednošću broja i vraća ažurirani kalkulator. Ako je prosleđena vrednost 0, trebalo bi da se pojavi greška „Deljenje nulom nije dozvoljeno“.
pover – Ovaj metod podiže rezultat na stepen date vrednosti broja i vraća ažurirani kalkulator.
getResult - Ovaj metod vraća rezultat

Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

Your Calculator class should have the following methods:

add - This method adds the given number value to the result and returns the updated Calculator.
subtract - This method subtracts the given number value from the result and returns the updated Calculator.
multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
power - This method raises the result to the power of the given number value and returns the updated Calculator.
getResult - This method returns the result
*/

class Calculator {
    constructor(value) {
        this.result = value;
    }
}