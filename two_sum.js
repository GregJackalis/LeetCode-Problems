//                                           PROBLEM DESCRIPTION
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // O(n^2) time Complexity
// const twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) continue;
//             if (nums[i] + nums[j] == target) return [i, j]; else continue;
//         }
//     }
//     return [];  // No solution
// };

// In this solution i used two for loops to iterate trhough every possible number combination till a sum is found that has the same value as the "target"



// O(n) Time Complexity
function twoSum(nums, target) {
    const numMap= new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (numMap.has(diff)) return [numMap.get(diff), i];
        numMap.set(nums[i], i);
    }
    return []; // No solution
}
// In this solution I used a map where the keys are the values of the nums array and the indices are the actual values of each key.
// Then on each iteration I have a variable that finds the difference between the target and the current value of the nums array.
// After that I check if there is a KEY in the map with the same value as the difference, if not then i add the current value as a key to the map, with also its index

// So in case we have an array that's [2,4,6], and the target = 8, tebn at the last iteration the difference would be 8 - 6 = 2, and
// then its checking if there is a key = 2 in the map, which there is, and in that case the values of those two keys (meaning the indices
// of the two values) are returned