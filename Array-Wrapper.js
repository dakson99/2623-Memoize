/* NASLOV ZADATKA

Kreirajte klasu ArraiVrapper koja prihvata niz celih brojeva u svom konstruktoru. Ova klasa treba da ima dve karakteristike:

Kada se dve instance ove klase saberu zajedno sa + operatorom, rezultujuća vrednost je zbir svih elemenata u oba niza.
Kada se funkcija String() pozove na instanci, ona će vratiti string odvojen zarezima okružen zagradama. Na primer, [1,2,3]

Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3]
*/
/**
 * @param {number[]} nums
 * @return {void}
 */

var ArrayWrapper = function (nums) {
    this.nums = nums;
}

/**
 * @return {number}
 */

ArrayWrapper.prototype.valueOf = function () {
    let sum = 0;
    for (let i = 0; i < this.nums.length; i++) {
        sum += this.nums[i];
    }
    return sum;
}

/**
 * @return {string}
 */

ArrayWrapper.prototype.ToString = function () {
    return `[${this.nums.join(',')}]`;
}