//                                                            15. 3Sum
// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// O(n^2) Time Complexity:
// - Unfortunately I can't find a faster solution on this problem and from my research on the web I saw that there isn't a faster than O(n^2) Solution for JavaScript.
// - The idea behind this solution is that for each element of the sorted array, I use two pointers, one that starts at the element right after the current array element, and one that starts at the end of the array
//   And then in case the sum of the current array element + leftPointer value + rightPointer value is smaller than the target, then since the array is sorted, then we have to move the leftPointer
//   to a bigger value, meaning that I have to move it one position to the right. Same logic is used in case the sum is bigger than the target (0 in this case), I decremenet the rightPointer and try to get
//   to the value 0.
// - Then at some point the two pointers meet with each other and if no sum === 0 is found then the while loop stops running and the for loop takes the i to the next position, meaning a new
//   current element.

// - Now in case the three numbers are equal to 0, then they're added/pushed to the result array that will returned after the for loop ends. In addition, inside this if statement
//   there are two other things going on as well.
//      1) There are two "while" loops: 
//         - One checks if the current rightPointer value is the same as the next "previous" one and so on, and after it finishes the rightPointer is at a diplicated value
//         - The second one checks if the current leftPointer value is the same as the next one and in that case the rightPointer keeps being incrememted
//           until it reaches the very last sequenced and duplicated value
//
//      2) There is one more incrementation and decrementation on the leftPointer and rightPointer variables:
//         - That's because in case from the while loops the pointers are on the very last duplicated value, then with these two commans, the pointers go
//           to the next value, skipping with this way the duplicated values in the array.
//         - In case the are no duplicated values and the while loops do not change the two pointers, then the two pointers are just being incremented
//           and decremented so that the iteration can be continued and therefore new possibly suitable for this problem sums can be found.

// - Lastly, the result array is returned- in which the "starting" value is a balnk array, so in case no suitable sum is found to be pushed into the result
//   array, then an empty array is returned as the problem says.

/**
 * @param {number[]} nums
 * @return {number[][]}11
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // array is sorted so that the two pointers can be used 
    let resultTriplets = [];
    if (nums.length < 3) return resultTriplets; // if an array with less than 3 elements is passed then an empty array is returned
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] > 0) continue; // we can't keep adding numbers bigger than the sorted ith number and have a smaller result, therefore we skip the element
        
        if (i > 0 && nums[i] === nums[i-1]) continue; // In case the currentValue is the saem as the previousValue, then there is no reason to check again with the pointers after it
                                                      // since that value ahs already been checked and it will return possibly the same sum back
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];
            if (sum === 0) {
                let temp = [nums[i], nums[leftPointer], nums[rightPointer]]

                resultTriplets.push(temp); // the array whose elements equal 0 are pushed into the array that will be returned at the end of the function
                while (nums[rightPointer] === nums[rightPointer - 1]) rightPointer--; // if the current rightPointer Value is the same as the previous one,
                                                                        // meaning the value that the pointer is about to go to, then I "skip" it with this loop
                                                                        // so on the next decrementation it will point to a new value after the duplicated values
                while (nums[leftPointer] === nums[leftPointer + 1]) leftPointer++; // same here is applied with above, if the current leftPointer value
                                                                        // is the same as the next one, meaning the one that the leftPointer will go to, then
                                                                        // I "skip" the duplicated value and I go to the next one (with the incrementation below)

                leftPointer++; // decrementing and incrementing the pointers no matter what so that the iteration can be continued and new values can be searched
                rightPointer--;

            }
            else if (sum < 0) leftPointer++; // if the sum is lower than 0, then because the array is sorted, it means that the leftPlinter needs to go "point"
                                             // to bigger values, thus the incrementation
            else rightPointer--; // else, meaning if the sum is bigger than the 0, then because the array is also sorted, it means that the rightPointer needs
                                 // to point to the next previous and smaller value, thus the decrementation
        }
    }
    return resultTriplets; // return the array, [] is returned in case no sum === 0 was found

};

// TESTCASES
console.log(threeSum([0,1,1]));
console.log(threeSum([1,0,-1]));
console.log(threeSum([-1,-1,1,2,0,-4]));
console.log(threeSum([-2,0,0,2,2]));



// NOTE: So this solution is like a Binary Search Method, where two pointers are used to iterate through the array and using three if statements (else if and else)
//       the pointers are being incremented or decremented (their values are changed). With the only big difference that the duplicating part needs a bit understanding.
//       But overall it's just another similar method to Binary Search. 
//       (another difference is that the pointers for each array element/value are the next one from the current element and the last one in the array,
//       so there is no mid value))