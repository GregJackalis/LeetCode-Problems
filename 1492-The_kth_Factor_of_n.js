//                                            1942. The kth Factor of n
// You are given two positive integers n and k. A factor of an integer n is defined as an integer i where n % i == 0.

// Consider a list of all factors of n sorted in ascending order, return the kth factor in this list or return -1 if n has less than k factors.



// O(n) Time Complexity (but it's faster than 48% of JavaScript users):
// - In this solution, I used the logic of going through every possible number smaller than the n variable and then if some of them where factors of the n
//   then I put them in an array.
// - Then if factors were found (and especially enough to return the kth value), then they would be returned but as[i - 1], because like in the problem's
//   description, if the k is 3 then I need to return the3rd value of the array which is actually the 0, 1, 2, 3.... 2nd value! Thus I used i - 1

// ** Keep in mind that this was the first solution I came up with but after seeing that even for an O(n) Time Complexity code, it's still slower than other
//    JavaScript users' code, I decided to narrow it down and instead of using a loop to make an array and then return through the array a value, I can just
//    straight-forward iterate through all the positive numbers that are smaller than the n number, while also decrementing the k value every time a factor is found.
//    So that by the time the k is 0, then the correct value at the desired position is found.
// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// var kthFactor = function(n, k) {
//     let factorArr = new Array();
//     let counter = 1;
//     while(counter <= n) {
//         if (n % counter === 0) factorArr.push(counter)
//         counter++;
//     }

//     console.log(factorArr)
//     if (factorArr[k - 1]) return factorArr[k - 1]; else return -1;
// };



// O(n) Time Complexity (but it's faster than 95% of JavaScript users):
// - In this solution,i just used a for loop to start straight-forward checking all the positive numbers till the n number if they are a factor of the n number.
// - Then if a number is a factor, it passes through the first "Stage" of the if statement and on the second one, because of the decrementation being before the k
//   varible, it DECREMENTS FIRST the k value overall (inside the block/function scope) andthen it checks if it's the one that needs to be returned.
// - If the k variable nevers reached 0 then -1 is returned.
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    for (let i = 0; i <= n; i++) {
        console.log(k)
        if (n % i === 0 && --k === 0) return i; //so here, first the <n % i ===0> operation happes and if it is TRUE, then it goes to the --k, in which because the decrement is before the k- the k is firstly decremented and THEN checked
    }
    return -1;
};

console.log(kthFactor(12,3));