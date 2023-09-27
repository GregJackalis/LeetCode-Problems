//                                                      53. Maximum Subarray
// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.


// NOTE: I he found a way to get the maximum sum on a passed array, BUT I need to find the maximum sum in sequenced elements, and not just skipping the ones that are no good

// // CODE IN CASE A MAXIMUM SUM NEEDS TO BE FOUND INSIDE AN ARRAY (non-sequenced elements)
// var maxSubArray = function(nums) {
//     let sum = 0;
//     for (const num of nums) {
//         let temp = sum + num;
//         if (temp > sum) sum += num;
//         console.log('Temp: ' + temp, '\nNum: ' + num, '\nSum: ' + sum);
//     }

//     console.log(sum);
// };

// maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);



// O(n) Time Complexity:
// Basically the logic behind this solution is that, on each iteration the sum is increased only when the current value of the nums array is smaller than
// the sum being increased with that current value. Because if we think about it, if there is a value bigger than the previously assigned sum then what's thepoint
// of keep going since the problem is about sequenced elements. 
// - Then on top of that when a new sum is made (in case the ucrrecnt element is bigger then the sum is initialized to the current value), then another
//   varable maxSum checks and stores the biggest sum found so far.

//   With this way, the solution is correct and the biggest sum of sequenced elements on each array is returned.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0];
    let maxSum = nums[0]
    for (let i = 1; i < nums.length; i++) {
        // if (sum + nums[i] > nums[i]) sum += nums[i]; else sum = nums[i]; 
        //if the current value is larger than sum + currentValue, then the sum is initialized to sum = currentValue (nums[i])
        
        sum = Math.max(0, sum) + nums[i]; // after watching neetCode's youtube explanation, I came up with this way of solving it too (similar thing to above)
        //here the Math.max() is used to check whether the sum made from the previous iteration is a positive value (above zero) and if not then 0 is returned
        //and then the current value is added to 0 and at the end it seems like the sum has been initialized to the current value

        if (maxSum < sum) maxSum = sum; 
        
        // used simple if statements because I tried ternary operators before and it was a lot slower
    }
    return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
