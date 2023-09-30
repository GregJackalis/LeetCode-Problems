"use strict";
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;
//     while (leftPointer <= rightPointer) {
//         let mid = (leftPointer + rightPointer) / 2;

//         console.log(nums[rightPointer])
//         if (nums[mid] === target) return mid;
//         else if (nums[rightPointer] === target) return rightPointer;
//         else if (nums[mid] > nums[rightPointer] && nums[mid] > target) {
//             leftPointer = mid;
//             rightPointer--;
//         }
//         else if (nums[mid] > nums[rightPointer] && nums[mid] < target) {
//             rightPointer = mid;
//             leftPointer++;
//         } else if (nums[mid] < nums[rightPointer] && nums[mid] > target) {
//             leftPointer = mid;
//             rightPointer--;
//         }
//         else {
//             rightPointer = mid;
//             leftPointer++;
//         }
//     }
//     return -1;
// };

// console.log(search([1], 1));



// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number}
//  */
// var search = function(nums, target) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;
//     while (leftPointer <= rightPointer) {
//         let mid = (leftPointer + rightPointer) / 2;

//         console.log(nums[mid])
//         if (nums[mid] === target) return mid;
//         else if (nums[rightPointer] === target) return rightPointer;
//         else if (nums[leftPointer] === target) return leftPointer;
//         else if ((target > nums[mid]) || (target < nums[mid] && nums[mid] > nums[rightPointer])) {
//             leftPointer = mid;
//             rightPointer--;
//         } else if (target < nums[mid] && nums[mid] < nums[rightPointer]) {
//             rightPointer = mid;
//             leftPointer++;
//         }
//     }
//     return -1;
// };

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));


// var search = function(nums, target) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;

//     while (leftPointer <= rightPointer) {
//         let mid = Math.floor((leftPointer + rightPointer) / 2);

//         if (nums[mid]) return mid;
//         else {
//             leftPointer++;
//             rightPointer--;
//         }
//     }
//     return -1;
// };



// var search = function(nums, target) {
//     return nums.indexOf(target);
// };


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let leftPointer = 0;
    let rightPointer = nums.length - 1;
    while (leftPointer <= rightPointer) {
        let mid = Math.ceil((leftPointer + rightPointer) / 2);
        if (nums[mid] === target) return mid;

        if (target > nums[leftPointer]) {
            if (nums[mid] > target){
                rightPointer = mid - 1;
                continue;
            } else leftPointer = mid + 1;
        } else if (target === nums[leftPointer]) return leftPointer;

        if (nums[mid] > nums[leftPointer]) {
            if (nums[mid] > target && nums[rightPointer] > target) {
                leftPointer = mid + 1;
            }
        } else if (nums[mid] < nums[leftPointer]){
            if (nums[mid] > target && nums[rightPointer] > target) {
                rightPointer = mid - 1;
            }
        } else {
            leftPointer++;
            rightPointer--;
        }
    }
    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([5, 1, 3], 5));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 5));
console.log("AFTER HERE");
console.log(search([5,1,2,3,4], 1));


// NOTE FOR TOMORROW: TIME ERROR HAPPENING BECAUSE ELSE CASE NOT WORKING. OTHER THAN THAT EVERYTHING ELSE SEEMS TO WORK FINE especially with the .ceil change. NEED TO FIX ON THE THIRD TESTCASE THE TIME ERROR