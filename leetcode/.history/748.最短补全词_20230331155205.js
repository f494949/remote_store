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
 执行用时：
88 ms
, 在所有 JavaScript 提交中击败了
44.94%
的用户
内存消耗：
46.1 MB
, 在所有 JavaScript 提交中击败了
52.81%
的用户
var shortestCompletingWord = function(licensePlate, words) {
    // 将licensePlate中字母出现次数遍历出来
    const arr = new Array(26).fill(0)
    for (const x of licensePlate) {
        if (/^[A-Za-z]+$/.test(x)) {
            arr[x.toLowerCase().codePointAt(0) - 'a'.codePointAt(0)]++            
        }
    }

    // 将words中字符串的字母出现次数遍历出来，进行比较
    let num = -1
    const length = words.length
    for (let i = 0; i < length; i++) {
        const emt = new Array(26).fill(0)
        for (let j = 0; j < words[i].length; j++) {
            const set = words[i][j]
            emt[set.codePointAt(0) - 'a'.codePointAt(0)]++
        }
        let judge = true
        for (let j = 0; j < 26; j++) {
            if (emt[j] < arr[j]) {
                judge = false
                break
            }
        }
        if (judge && (num < 0 || words[i].length < words[num].length)) {
            num = i
        }
    }
    return words[num]
};
// @lc code=end

