/*NASLOV ZADATKA

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 Dati niz celih brojeva nums i celobrojni cilj, vratite indekse dva broja tako da se sabiraju u cilj.

Možete pretpostaviti da bi svaki ulaz imao tačno jedno rešenje i da ne možete koristiti isti element dvaput.

Odgovor možete vratiti bilo kojim redosledom.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
    let numToIndexMap = {};

    for (let i = 0; i < nums.length; i++) {

        let diff = target - nums[i];


        if (numToIndexMap.hasOwnProperty(diff)) {

            return [i, numToIndexMap[diff]];
        }


        numToIndexMap[nums[i]] = i;
    }


    return null;
};

let nums = [1, 3, 4, 8];
let target = 7;

console.log(twoSum(nums, target));