//                                         33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.

// O(n) Time Complexity:
// - This is a simple solution using JavaScript and ES6 methods to iterate through the array and search for the index of a specific value. It's not the fastest,
//   but it is one of the simplest
// var search = function(nums, target) {
//     return nums.indexOf(target);
// };



// O(log n) Time Comlexity ===> Binary Search Method:
// - This solution took me a while and lots of testcases to find it. It uses the Binary Search Method and on each "special" case there are specific cases
//   made on each pointer as well. I can't really explain how I came up with this solution, that's because this solution was made through making a main 
//   "structure" and then through lots of changes and testcases (and small changes each time) lead up to the actual solution, which covers any possible
//   outcome, every possible rotate sorted array.
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;
//     while (leftPointer <= rightPointer) { // using <= and not just < because there might be times that the array is just one element, and in that case if it was just < then it wouldn't go inside the loop at all
//         let mid = Math.ceil((leftPointer + rightPointer) / 2); // on each iteration a new mid is made with the changed pointers
//         if (nums[mid] === target) return mid; // on each iteration before checking for anything else, with the new made mid var I check if it's on the value that I'm looking for

//         if (target > nums[leftPointer] && target > nums[rightPointer] && nums[mid] < nums[rightPointer]) { // in case we're looking in an array that is sorted enough to have some larger than the mid values at the end
//             if (target > nums[mid]) { // in case larger values at the end and smaller pointer values than target, then in case the target is also larger than the mid value
//                 rightPointer = mid - 1; // then this means that the value is at the left side of the array
//                 continue;
//             } else { // if the target is smaller than the mid value, but still larger than the two pointer values with also the mid being smaller than the right end value
//                 leftPointer = mid + 1; // then the value is on the right side of the array
//                 continue;
//             }
//         } else if (target > nums[leftPointer]) { // in case only the target is larger than the value on the left pointer, then the same happends inside
//             if (nums[mid] > target){
//                 rightPointer = mid - 1;
//                 continue;
//             } else {
//                 leftPointer = mid + 1;
//                 continue;
//             }
//         } else if (target === nums[leftPointer]) return leftPointer;

//         if (nums[mid] > nums[leftPointer]) {
//             if (nums[mid] > target && nums[rightPointer] >= target) {
//                 leftPointer = mid + 1;
//                 continue;
//             }
//         } else if (nums[mid] < nums[leftPointer]){
//             if (nums[mid] > target && nums[rightPointer] > target) {
//                 rightPointer = mid - 1;
//                 continue;
//             } else {
//                 leftPointer = mid + 1;
//                 continue;
//             }
//         }

//         leftPointer++;
//         rightPointer--;
//     }
//     return -1;
// };


// O(log n) Time Complexity:
// - This is a much more simple approach with the Binary Search Method, especially comparing to the one above.
var search = function(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[left] <= arr[mid]) {
            if (arr[left] <= target && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (arr[mid] < target && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1; // target not found
}
console.log(search([4,5,6,7,0,1,2], 0)); // 4
console.log(search([5, 1, 3], 5)); // 0
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([4,5,6,7,0,1,2], 5)); // 1
console.log(search([5,1,2,3,4], 1)); // 1
console.log(search([1], 1)); // 0
console.log(search([1,3,5], 5)); // 2
console.log(search([3, 5, 1], 1)); // 2
console.log(search([5,1,3], 3)); // 2
console.log("AFTER HERE");
console.log(search([8,9,2,3,4], 9)); // 1