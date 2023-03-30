/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */

// 1.遍历字符串，确定start和end
// 2.将第一次出现元素和最后一次出现该元素的字符串片段划分出来，计算长度end-start+1
// 3.再将start = end+1
var partitionLabels = function(s) {
    const length = s.length
    const arr = new Array(26)
    const pointA = 'a'.codePointAt(0)
    for (let i = 0; i < length; i++) {
        //i为同个字符最远的end
        arr[s.codePointAt(i) - pointA] = i
    }

    let start = 0, end = 0
    const res = []
    for (let i = 0; i < length; i++) {
        end = Math.max(end, arr[s.codePointAt(i) - pointA])
        if (end === i) {
            res.push(end - start + 1)
            start = end + 1
        }
    }
    return res
};
// @lc code=end

