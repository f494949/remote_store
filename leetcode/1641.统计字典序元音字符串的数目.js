/*
 * @lc app=leetcode.cn id=1641 lang=javascript
 *
 * [1641] 统计字典序元音字符串的数目
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// n = 1时，输出为5
// n = 2时，输出为5+4+3+2+1=15
// n = 3时，输出为15+10+6+3+1=35
// n = 4时，输出为35+20+10+4+1=70
// 法一
var countVowelStrings = function (n) {
  a = e = i = o = u = 1
  for (let k = 1; k < n; k++) {
    a = a + e + i + o + u
    e = e + i + o + u
    i = i + o + u
    o = o + u
  }
  return a + e + i + o + u
}

// 法二
var countVowelStrings = function(n) {
    return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
};

// @lc code=end
