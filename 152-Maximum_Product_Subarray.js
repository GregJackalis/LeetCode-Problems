//                                            152. Maximum Product Subarray
// Given an integer array nums, find a 
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// O(n) Time Complexity:
// - In this solution, tI used a similar approach to the 53. Maximum Subarray problem which it was for sum of numbers and not product.
// - The challenging part of this problem was the negative values, because there can be also cases where there is one negative value but then there is
//   another one so together they make an even bigger positive product.
// - To face that "difficulty" I had to find a way to "store" the negative values in case another comes up next. So everytime a negative number would be
//   the current value, the max and min variables are getting switched
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prod = nums[0];
    let maxProd = nums[0];
    let minProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        // here the variables are flipped because in that case there is a possibility that the min value would be negative, and in that case it means that the
        // the negative number would now  be stored in the max variable, on which the max value between the negative currentValue and the multiplication
        // of the previous switched negative number and the negative currentValue will be chosen. 
        if (nums[i] < 0) {
            let temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }

        // here in case the max * currentValue is smaller than the currentValue then what's the point of keeping it. so in that case the currentValue is saved to the max variable and a new "sequence" is started
        maxProd = Math.max(nums[i], maxProd * nums[i]);

        // this is used so that the minimum value of the two (which if the currentValue is negative, it will end up the mutliplication between the positive and negative number being stored) will be stored
        minProd = Math.min(nums[i], minProd * nums[i]);

        // the prod value is what it will be returned so on each iteration with the Math.max() method I check if the new maxProd value is bigger or the prod one (probs a previous maxProd value as well)
        prod = Math.max(prod, maxProd);

    }
    return prod;
};


// console.log(maxProduct([-2,3,-4]));
console.log(maxProduct([2,3,-2,-3]));
console.log(maxProduct([-4, -3]));
console.log(maxProduct([-2, 3, -4]))