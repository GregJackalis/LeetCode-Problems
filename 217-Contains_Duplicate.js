
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


// O(n) Time Complexity;
// In this solution i use a map to check if a number previously existed in the array. Basically on each iteration i check if there is a key with the same value and if there  isn't then
// I add it to the map. 
var containsDuplicate = function(nums) {
    let numMap = new Map()
    for (let i = 0; i < nums.length; i++){
        if (numMap.has(nums[i])) return true;
        numMap.set(nums[i], i);
    } 

    return false;
};
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


// O(n) Time Complexity:
// In this solutionn the exact same logic is used as above with the only difference that i use a set, meaning that there are not any indices therefore when a duplicate is not found, only
// the VALUE is added to the set and not the value AND the index (compared to the Map structure used above)
var containsDuplicate2 = function(nums) {
    let numSet = new Set();
    for (const num of nums ){
        if (numSet.has(num)) return true;
        numSet.add(num);
    } 

    return false;
};
console.log(containsDuplicate2([1, 2, 3, 5]));


// O(n) Time Complexity:
// In this solution a Set is used more efficiently, memory-wise and NOT time-wise. The most known attribute of Sets is that even if they have duplicates, they only keep and make an array with
// unique values only. So by using this point, after I make a Set with the nums arra, I then check the Sets and the nums sizes. In case there are duplicates in the nums array, then
// the Set's size would be smaller (different) than the nums array length, since Sets only keep unique values like I said.
var containsDuplicate3 = function (nums) {
    let mySet = new Set(nums);
    return (mySet.size !== nums.length)
}
console.log(containsDuplicate3([1, 2, 3, 5]));
