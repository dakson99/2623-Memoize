# 2623. Memoize

## The title of the task:

**Given a function fn, return a memoized version of that function.
A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
You can assume there are 3 possible input functions: sum, fib, and factorial.
sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.**


__Definišite funkciju pod nazivom memoize koja uzima funkciju fn kao svoj parametar.
Kreirajte prazan objekat koji se zove keš za čuvanje prethodno izračunatih rezultata.
Vrati novu funkciju koja uzima bilo koji broj argumenata koristeći sintaksu širenja.
Koristite JSON.stringifi() da pretvorite argumente u string koji će se koristiti kao ključ za objekat keša
Proverite da li ključ već postoji u objektu keša. Ako jeste, vratite keširanu vrednost.
Ako ključ ne postoji u kešu, pozovite originalnu funkciju fn koristeći apply() da biste prosledili argumente i sačuvali rezultat u objektu keša koristeći ključ kao ime svojstva.
Na kraju, vratite izračunati rezultat__ 