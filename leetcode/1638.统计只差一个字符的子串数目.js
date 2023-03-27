/*
 * @lc app=leetcode.cn id=1638 lang=javascript
 *
 * [1638] 统计只差一个字符的子串数目
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var countSubstrings = function(s, t) {
    const sl = s.length
    const tl = t.length
    let sum = 0
    for (let i = 0; i < sl; i++ ) {
        for (let j = 0; j < tl; j++) {
            let count = 0
            for (let k = 0; i+k < sl && j+k < tl; k++) {
                count += s[i+k] === t[j+k] ? 0 : 1
                if (count > 1) {
                    break
                } else if (count === 1) {
                    sum++
                }
            }
        }
    }
    return sum
};
// @lc code=end

