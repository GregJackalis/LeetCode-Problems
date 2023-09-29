//                                          153. Find Minimum in Rotated Sorted Array
// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// O(n) Time complexity:
// - In this simple solution I used the spread operator in JavaScript to "unveil" the values in the nums array and then between them find the minimum value.
// ** The problem with this solution is that even though for its simplicity in the code, it's not the fastest solution and it still
//    iterates over the whole array in case there is a minimum value
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return Math.min(...nums);
};

console.log(findMin([4, 5, 6, 7, 8, 0, 2]));



// O(log n) Time Complexity === Binary Search Method:
// - Now in this solution 2 pointers are used, one that is at the very start of the array (rightPointer = 0) and one at the end of the array (leftPointer = nums.length - 1)
// - Then a while loop is used to check if the left pointer is smaller than the right one, because in case they "point" at the same position then the min value has been found
//      > For the left pointer:
//          - It's been increased only if the value at the middle of the two pointers is bigger than the value at the rightPointer, this happens because:
//      ** The right pointer at first looks at the very end of the array, then by checking the mid value of the SORTED ARRAY, we check
//         that in case the value is bigger than the very end of the array, then that means that the array has been ROTATED so that min value
//         is NO longer at the START, meaning that the leftPointer needs to "close the gap" between the left nad right pointers.
//
//       > For the right pointer:
//          - In case the value at the middle of the length of the two pointers is smaller than the the value on the rightPointer, then
//            that means that either the SORTED ARRAY has been rotated enough times so that the minimum is on the left side of the middle of the array
//            OR that is didn't get rotated. In any case though, the minimum value is on the left side now, so I immediately "cut" the distance
//            and I assign to the rightPointer the current mid length of the two pointers, cutting the length and search down by 2.

//      - And then it keeps going with the same pattern until the right and left pointers are at the same position and then 
//        return either nums[rightPointer] or nums[leftPointer], it's the same thing. And with this way I cut down and find the minimum
//        value of an array in O(log n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin2 = function(nums) {
    let leftPointer = 0; 
    let rightPointer = nums.length - 1;
    while (leftPointer < rightPointer) {
        let mid = Math.floor((leftPointer + rightPointer) / 2);

        if (nums[mid] > nums[rightPointer]) leftPointer++;
        else rightPointer = mid;
    }
    return nums[rightPointer];
};

console.log(findMin2([4, 5, 6, 7, 8, 0, 2]));
