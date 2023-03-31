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
var getFolderNames = function(names) {
    const length = names.length
    const hash = new Map()
    const arr = new Array(length).fill(0)
    const addSuffix = (name, k) => name + '(' + k + ')'
    for (let i = 0; i < length; i++) {
        const name = arr[i]
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
// @lc code=end

