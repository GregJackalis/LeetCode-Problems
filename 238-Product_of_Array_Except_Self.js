//                                          238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


//                                                          ÍSOLUTION
// O(n) Time Complexity:
// This solution is focused on the idea of instead of finding the product of everything EXCEPT SELF, we can just rather multiply the previous elements of
// SELF and the right elements of SELF. 

//                       So according to that I made two arrays,leftArray and rightArray (and the answer array at the end of course):

// - On the leftArray:
//      > Basically on each iteration there is a product being calculated of the left side of the nums[i]
//      > Because there are no elements on the left side of the first element, I assing the number 1
//      > Then after that, the previous calculated productof the previous arrays is used to be multiplied with the next element of the nums array
//      E.g. ==> for the array [2, 4, 5, 6]. 
//               1st Iteration)     leftArray[0] = 1
//               2nd Iteration)     leftArray[1] = 1 * 2, (which if you think about, the product of the left side of the 2nd element of the nums array, IS actually just 2)
//               3rd Iteration)     leftArray[2] = 2 * 4  = 8, (leftArray[1] * nums[1], which again is correct since 2*4 onthe nums array is 8)
//               4th Iteration)     leftArray[3] = 8 * 5 = 40, (again this is correct)

// - On the rightArray:
//      > It's the same logic as in the leftArray with the only difference that it starts from the end and the for loop is in reverse order
//      > The reason that I start in reverse with the for loop is that just like on the left side of each element there is a "limit". The stating point that
//        cannot go beyond that point to the left. Same is with the reversed for loop, starting from the end and putting a "limit" because simply there 
//        isn't anything beyond that ==> 
//      > if (i === nums.length - 1) rightArray[i] = 1; In this case I check if the element is at the end of the array, and then I assign it to the ith
//      position of the array, which is the end. So the rightArray will look smth like this when this code is run: [undefined, undefined, undefined, 1]
//      E.g. ==> for the array [2, 4, 5, 6].
//               1st iteration)     rightArray[3] = 1
//               2nd iteration)     rightArray[2] = 1 * 6 = 6, (and it is correct since nums[2] = 5, and after that there is only the value 6)
//               3rd iteration)     rightArray[1] = 5 * 6 = 30, (nums[i+1] * rightArray[i+1]), and that's how I use previously calculated products to add on each iteration
//               4th iteration)     rightarray[0] = 4 * 30 = 120 (nums[i+1], which nums[1] = 4, and then multiply it by rightArray[i + 1], which that too rightArray[1] = 30)


// - Lastly what's left is the combination of the two arrays, which is very simple. Just like in the beginning, this solution is not based on the logic
//  of finding the product of everything except THAT one element each time, but to find the product of each side on each element in the array. So now that
//  I found the left and right side product in each case (on each element), all is left is to multiply each side on EACH element's iteration and store it
//  inside the answer array
//      E.g.==> for the array [2, 4, 5, 6]
//              1st iteration)      answer[0] = 1 * 120 = 120 (there isn't any value on the left side of the 2 value only on the left, which those values make the 120 product value)
//              2nd iteration)      answer[1] = 2 * 30 = 60 (on the left side of the 4 value on the nums[1] position is only the value 2 and then on the right side is 5 and 6, which return 30)
//              3rd iteration)      answer[2] = 8 * 6 = 48 (again, on the left side 2 and 4 return 8 and on the right side is only the value 6)
//              4th iteration)      answer[3] = 120 * 1 = 120 (on the last iteration there isn't any elements after and that's why the last value of the rightArray is 1, and then the rest of the elements on the left return 120)


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let leftArray = [];
    for(let i = 0; i < nums.length; i++) {
        if (i === 0) leftArray[i] = 1;
        else leftArray[i] = nums[i-1] * leftArray[i - 1];
    }

    let rightArray = []
    for(let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) rightArray[i] = 1;
        else rightArray[i] = nums[i+1] * rightArray[i + 1];
    }

    let answer = [];
    for(let i = 0; i < nums.length;i++) {
        answer[i] = rightArray[i] * leftArray[i];
    }

    return answer;

};

console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([2, 4, 5 , 6]));