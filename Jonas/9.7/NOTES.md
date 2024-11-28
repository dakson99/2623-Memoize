Kod ||(or) ako je jedan od rezultata istinit on njega prikazuje, a na primer ako je drugi isto istinit on se nece prikazati. To je treci primer ili ti shor-circuiting.

Kada je u pitanju short circuiting evaluation && operator radi na poptpuno suprotan nacin u donosu na ||(or).
short circuiti && vraca kada je vrednost netacka i odma vraca tu negativnu vrednost, dakle bez procene drugog operanda. 

Dakle ovako ||(or) vraca true vrednost ako je jedan od njih tacan ako su sve netacne on vraca poslednju, a &&(and) operator vraca prvu negativnu vrednost ili poslednju ako su sve istinite.