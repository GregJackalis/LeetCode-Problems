
//                                                   217. Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


/**
 * @param {number[]} nums
 * @return {boolean}
 */


// O(n) Time Complexity
var containsDuplicate = function(nums) {
    let numMap = new Map()
    for (let i = 0; i < nums.length; i++){
        if (numMap.has(nums[i])) return true;
        numMap.set(nums[i], i);
    } 

    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


var containsDuplicate2 = function(nums) {
    let numSet = new Set();
    for (const num of nums ){
        if (numSet.has(nums[i])) return true;
        numMap.add(nums[i]);
    } 

    return false;
};

console.log(containsDuplicate([1, 2, 3, 5]));
