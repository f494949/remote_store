/*
 * @lc app=leetcode.cn id=2367 lang=javascript
 *
 * [2367] 算术三元组的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */

// 法一 暴力枚举
// var arithmeticTriplets = function(nums, diff) {
//     const length = nums.length
//     let count = 0
//     for (let i = 0; i < length-2; i++) {
//         for (let j = i+1; j < length-1; j++) {
//             for (let k = j+1; k < length; k++) {
//                 if (nums[j] - nums[i] === diff && nums[k] - nums[j] === diff) {
//                     count++
//                 }
//             }
//         }
//     }
//     return count
// };

// 法二 哈希表
执行用时：68 ms
, 在所有 JavaScript 提交中击败了
54.44%
的用户
内存消耗：
41.8 MB
, 在所有 JavaScript 提交中击败了
21.11%
的用户
var arithmeticTriplets = function(nums, diff) {
    const set = new Set()
    for (const x of nums) {
        set.add(x)
    }
    
    let count = 0
    for (const x of nums) {
        if (set.has(x + diff) && set.has(x + 2 * diff)) {
            count++
        }
    }
    return count
};
// @lc code=end

