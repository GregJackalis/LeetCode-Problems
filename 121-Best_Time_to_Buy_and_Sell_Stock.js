/**
 * @param {number[]} prices
 * @return {number}
 */
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

    // console.log(profit);
};

maxProfit([2,4,1]);