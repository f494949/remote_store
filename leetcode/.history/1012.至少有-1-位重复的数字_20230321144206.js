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

// 若n为w
var numDupDigitsAtMostN = function(n) {
    let arr = []
    for (let i = 1; i <= n; i++ ) {
        arr.push(i)
    }
    arr.filter((e) => e===e )
};
// @lc code=end

