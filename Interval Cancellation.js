/* NASLOV ZADATKA:

Dati funkciju fn, niz argumenata args i interval vremena t, vratite funkciju otkazivanja cancelFn.
Nakon kašnjenja od cancelTimeMs, vraćena funkcija cancelFn će biti pozvana.
setTimeout(cancelFn, cancelTimeMs)
Funkciju fn treba odmah pozvati sa args, a zatim ponovo pozvati svakih t milisekundi dok se cancelFn ne pozove u cancelTimeMs ms

Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.
After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.
setTimeout(cancelFn, cancelTimeMs)
The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms
*/ 