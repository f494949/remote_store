/*
 * @lc app=leetcode.cn id=1012 lang=javascript
 *
 * [1012] 至少有 1 位重复的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 若n为四位数，则三位数不重复的数字，百位上有1-9这9种选择，十位上是0-9排除了百位数后9zhong
var numDupDigitsAtMostN = function(n) {
    let arr = []
    for (let i = 1; i <= n; i++ ) {
        arr.push(i)
    }
    arr.filter((e) => e===e )
};
// @lc code=end

