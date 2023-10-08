// Learning and Testing QuickSort


// const startTime = performance.now();
// var quickSort = function(nums) {
//     return nums.sort((a, b) => a - b);
// }

// console.log(quickSort([10,80,30,90,40,50,70]));
// const endTime = performance.now();

// const execution = endTime - startTime;

// console.log("Time :" + execution);


const startTime = performance.now();
var quickSort = function(nums) {
    if (nums.length <= 1) return nums;
    let pivot = nums[nums.length - 1];
    let leftArr = [];
    let rightArr = [];
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < pivot) leftArr.push(nums[i]); else rightArr.push(nums[i]);
    }

    // return[leftArr, pivot, rightArr]; // this returns each array that also needs to be quicksorted as well
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([10,80,30,90,40,50,100]));
const endTime = performance.now();

const execution = endTime - startTime;

console.log("Time :" + execution);