/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const arr = new Array()
    for (const x of licensePlate) {
        if (/^[A-Za-z]+$/.test(x)) {
            set.add(x.toLowerCase())
        }
    }
};
// @lc code=end

