/*
 * @lc app=leetcode.cn id=831 lang=javascript
 *
 * [831] 隐藏个人信息
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

const country = ['','+*','+**','+***']
var maskPII = function(s) {
    const at = s.indexOf('@')
    if (at > 0) {
        s = s.toLowerCase()
        return s[0] + '*****' + s.substring(at-1)
    }
    for (let i = 0; i < length; i++) {}
    
};
// @lc code=end

