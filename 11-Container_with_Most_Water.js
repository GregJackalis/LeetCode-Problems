//                                      11. Container with Most Water
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// O(n) Time Complexity:
// **  NOTE: NOT THE BEST PROBLEM DESCRIPTION. I APPROACHED THE PROBLEM AS IN FINDING THE MAX "SUB-RECTANGLE"
// - I used the Binary Search Method with the only difference that I didn't sorted the array, simply because it's a bar chart so each 
//   position matters and sorting the array/barchart based on the values would ruin the actual barchart.

// - Then, on each iteration the rectangle formula is used, where the pointers (positions) are used for the width of the two "bars" and their
//   actual values as the height.

// - On the height calculation, I used Math.min because just like in the water container picture on the problem's description, when i find the area of the 
//   rectangle for two sides that are NOT equal (non-equal height), I need to keep the smaller one.

// - Lastly, each iteration continues by moving the smaller value's pointer. 
//      E.g. ==> if checking the rightVal is bigger than the leftValthen then the left pointer is being incremented to look for a bigger value. 
//               In case the leftVal is bigger or the two values are the same then the right one is being decremented.
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length <= 2) return Math.min(...height)
    let left = 0;
    let right = height.length - 1;
    let max = 0;
    while (left < right) {
        // let formula = (right - left) * (Math.min(height[left], height[right]));

        // same thing as above but simpler to understand. both have very small time differencies
        let widthVar = right - left;
        let heightVar = Math.min(height[left], height[right]);
        let formula = widthVar * heightVar;

        max = Math.max(max, formula);

        if (height[left] < height[right]) left++;
        else right--;
    }
    return max;
};


// TESTCASES
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // correct answer: 49
console.log(maxArea([1,2,4,3])); // correct answer: 4
console.log(maxArea([1,8,6,2,5,4,8,25,7])); // correct answer: 49