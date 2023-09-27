/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prod = nums[0];
    let maxProd = nums[0];
    let minProd = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = maxProd;
            maxProd = minProd;
            minProd = temp;
        }

        maxProd = Math.max(nums[i], maxProd * nums[i]);
        minProd = Math.min(nums[i], minProd * nums[i]);

        prod = Math.max(prod, maxProd);

    }
    return prod;
};


// console.log(maxProduct([-2,3,-4]));
console.log(maxProduct([2,3,-2,-4]));
console.log(maxProduct([-4, -3]));
console.log(maxProduct([-2, 3, -4]))