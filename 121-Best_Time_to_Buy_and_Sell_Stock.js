//                                          121-Best Time to Buy and Sell Stock
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

ß
/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) Time Complexity:
// - In this solution I use a max and a min variable to see where is the biggest and smallest price in this array.
// - On top of that, I also use one dayMax and one dayMin variable to save the index (number of the day where the price is max and min). That helps me 
//   to check on each iteration if there max value (the one we should the stocks for) is before the min price, if that's the case then just because we can't
//   sell before we buy, I initialize the two max and dayMax variables.
// - Then in order to actually achieve the best profit of each array passedinto the function, I use a different variable called profit and it starts as 0
//   (basically max - min at the start is 0), and then on each iteration if the max and min variables have changed, I calculate the new profit of the newly
//   assigned min and max variables. THEN, if the new profit calculated with the changed max and min variables is bigger than the previous calculated profit, ONLY THEN
//   it replaces the value of the actualy profit variable.
// ** This profit variable helps to check in case there is indeed a very low price at the end of the array (meaning we could buy for low price but not sell afterwards, so returning 0 in that case)
//    then, if there is a profit made with a slighyly bigger price than the min price of the array, then I can find it with this code.
//    E.g. ==> In case the array [2, 4, 1] is passed, without the profit value, 0 would be returned because 1 is the min price and there isnt anything else after that, so NO PROFIT
//             BUT with the profit variable now, on the 2nd iteration where the max = 4 and the min = 2, it seems like we do eventually have profit 2 instead of 0. So in that case 2 will
//             be returned, the correct (and best) profit we can get from this array
      
var maxProfit = function(prices) {
    let max = prices[0];
    let min = prices[0];
    let dayMin = 0;
    let dayMax = 0;
    // let dayMin, daymAX = 0;
    let profit = max - min;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i];
            dayMin = i;
        }
        if (prices[i] > max) {
            max = prices[i];
            dayMax = i;
        }

        if (dayMax > dayMin && profit < max - min) profit = max - min;
        if (dayMax < dayMin) dayMax = 0, max = 0;
    }
    return profit;
};

maxProfit([2,4,1]);