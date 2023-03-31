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
    // 将licensePlate中字母出现次数遍历出来
    const arr = new Array(26).fill(0)
    for (const x of licensePlate) {
        if (/^[A-Za-z]+$/.test(x)) {
            arr[x.toLowerCase().codePointAt(0) - 'a'.codePointAt(0)]++            
        }
    }

    // 
    const length = words.length
    const emt = new Array(26).fill(0)
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            const set = words[i][j]
            emt[set[i].codePointAt() - 'a'.codePointAt(0)]++
        }
    }
};
// @lc code=end

