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
var arithmeticTriplets = function(nums, diff) {
    const set = new Set()
    for (const x ) {}
};
// @lc code=end

