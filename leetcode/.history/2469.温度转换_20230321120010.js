/*
 * @lc app=leetcode.cn id=2469 lang=javascript
 *
 * [2469] 温度转换
 */

// @lc code=start
/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    kelvin = (celsius + 273.15)*100/100
    fahrenheit = (celsius * 1.80 + 32.00)
    let ans = [kelvin,fahrenheit]
};
// @lc code=end

