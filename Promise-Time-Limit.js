/* NASLOV ZADATKA:

Uz asinhronu funkciju fn i vreme t u milisekundama, vratite novu vremenski ograničenu verziju ulazne funkcije. fn uzima argumente koji su dati vremenski ograničenoj funkciji.
Vremenski ograničena funkcija treba da prati ova pravila:
Ako se fn završi unutar vremenskog ograničenja od t milisekundi, vremenski ograničena funkcija treba da se reši sa rezultatom.
Ako izvršenje fn premašuje vremensko ograničenje, vremenski ograničena funkcija treba da odbije sa stringom „Time Limit Ekceeded“.

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.
The time limited function should follow these rules:
If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/ 