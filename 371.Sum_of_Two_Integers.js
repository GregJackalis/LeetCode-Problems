//                                  371. Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -

// First Try (failed):
// /**
//  * @param {number} a
//  * @param {number} b
//  * @return {number}
//  */
// var getSum = function(a, b) {
//     let binaryA = a.toString(2);
//     let binaryB = b.toString(2);
//     binaryA = binaryA.replace('-','');
//     binaryB = binaryB.replace('-', '');

//     let maxLength = Math.max(binaryA.length, binaryB.length);
//     binaryA = binaryA.padStart(maxLength, '0');
//     binaryB = binaryB.padStart(maxLength, '0');
//     console.log(binaryA, binaryB);

//     if (a < 0){
//         binaryA = binaryA.replace('0', '1');
//         binaryA = '1' + binaryA;
//     } 
//     if (b < 0) {
//         binaryB = binaryB.replace('1', '0');
//         binaryB = '1' + binaryB;
//     }

//     console.log(binaryA, binaryB);
//     let result = '';
//     let carry = false;
//     for (let i = maxLength-1; i >= 0; i--) {
//         let sum = parseInt(binaryA[i], 10) + parseInt(binaryB[i], 10);
//         if (sum === 2) {
//             if (carry === false) {
//                 carry = true;
//                 result = '0' + result;
//             } else {
//                 result = '1' + result;
//             }
//         } else if (sum === 1) {
//             if (carry === true) {
//                 result = '0' + result;
//             } else {
//                 result = '1' + result;
//             }
//         } else {
//             if (carry === true) {
//                 result = '1' + result;
//                 carry = false;
//             } else {
//                 result = '0' + result;
//             }
//         }
//     }

//     if (carry === true) result = '1' + result;
//     else result = '0' + result;

//     console.log(parseInt(result, 2));
// };


// Second Try (Time Complexity 0(log n), after checking bit manipulation tutorials and a few solutions)
// Basically the XOR operator ^ is used to add the integeres without carry in the "a" variable, and the
// AND operator & is used to calculate the carry. The carry is then added to the correct position by
// left-shifiting it and storing it in B so that in the next iteration in case the on the carry position 
// there isn't 1 bit, then the carry that was stored in b will be therefore added to the XOR-non carry-bit number

// ** The left shifting happens because when let's say a carry needs to be used because of 1+1 bits for example,
//    then as we know from bit addition, the carry goes over to the next (to the left) bit and it's added there,
//    and so on... That's why the << operator is used to add/take/put the carry to the correct position
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        const carry = a & b;
        a ^= b;
        b = carry << 1;
        console.log(a, b, carry);
        if (b === 0 && carry === 0) break;
    }
    console.log(a);
};
getSum(3,5);
//      1ST
// 0011 & 0101 = 0001 ==> 1 = carry
// 0011 ^ 0101 = 0110 ==> 6 = a
// carry << 1 = 0001 << 1 ==> 0010 = 2 = b

//      2ND
// 0110 & 0010 = 0010 ==> 2 = carry
// 0110 ^ 0010 = 0100 ==> 4 = a;
// 0010 << 1 == 0100 ==> 4 = b

//      3RD
// 0100 & 0100 = 0100 ==> 4 = carry
// 0100 ^ 0100 = 0000 ==> 0 = a
// 0100 << 1 = 1000 ===> 8 = b

//      4TH
// 0000 & 1000 = 0000 ==> 0 = carry
// 0000 ^ 1000 = 1000 ==> 8 = a
// 0000 << 1 = 0000 ==> 0 = b

// if (b === 0 && carry === 0) break; === TRUE


// let i = '11';
// console.log(parseInt(i, 2));
// getSum(2,3);
// getSum(3, 4);
// getSum(4, 5);
// getSum(-3, -5);
console.log(3 & 6);
// 0011 & 0110 = 0010 ==> 2
console.log(3 ^ 6);
// 0011 ^ 0110 = 0101 ==> 5

