//                                  15. 3Sum
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
/**
 * @param {number[]} nums
 * @return {number[][]}11
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let resultTriplets = [];
    if (nums.length < 3) return resultTriplets;
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] > 0) continue; // we can't keep adding numbers bigger than the sorted ith number and have a smaller result, therefore we skip the element
        
        if (i > 0 && nums[i] === nums[i-1]) continue; // 
        let leftPointer = i + 1;
        let rightPointer = nums.length - 1;

        while (leftPointer < rightPointer) {
            let sum = nums[i] + nums[leftPointer] + nums[rightPointer];
            if (sum === 0) {
                let temp = [nums[i], nums[leftPointer], nums[rightPointer]]

                resultTriplets.push(temp);
                while (nums[leftPointer] === nums[leftPointer + 1]) {
                    console.log("first inner while");
                    console.log(leftPointer, nums[leftPointer])
                    leftPointer++;
                }

                while (nums[rightPointer] === nums[rightPointer - 1]) {
                    console.log("second inner while");
                    console.log(rightPointer, nums[rightPointer]);
                    rightPointer--;
                }


                console.log("last before")
                console.log(leftPointer, rightPointer)

                leftPointer++;
                rightPointer--;

                console.log("last after")
                console.log(leftPointer, rightPointer)

            }
            else if (sum < 0) leftPointer++;
            else rightPointer--;
        }
    }
    return resultTriplets;

};

// console.log(threeSum([0,1,1]));
// console.log(threeSum([1,0,-1]));
console.log(threeSum([-1,-1,1,2,0,-4]));
