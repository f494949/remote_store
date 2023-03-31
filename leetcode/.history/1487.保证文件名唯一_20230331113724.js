/*
 * @lc app=leetcode.cn id=1487 lang=javascript
 *
 * [1487] 保证文件名唯一
 */

// @lc code=start
/**
 * @param {string[]} names
 * @return {string[]}
 */

// 哈希表
执行用时：164 ms
, 在所有 JavaScript 提交中击败了
80.78%
的用户
内存消耗：
63.3 MB
, 在所有 JavaScript 提交中击败了
25.56%
的用户
var getFolderNames = function(names) {
    const length = names.length
    const hash = new Map()
    const arr = new Array(length).fill(0)    
    for (let i = 0; i < length; i++) {
        const name = names[i]
        if (!hash.has(name)) {
            arr[i] = name
            hash.set(name, 1)
        } else {
            let k = hash.get(name)
            while (hash.has(addSuffix(name, k))) {
                k++
            }
            arr[i] = addSuffix(name, k)
            hash.set(name, k+1)
            hash.set(addSuffix(name,k), 1)
        }
    }
    return arr
};

const addSuffix = (name, k) => name + '(' + k + ')'
// @lc code=end

