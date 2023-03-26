/*
 * @lc app=leetcode.cn id=2395 lang=javascript
 *
 * [2395] 和相等的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    const length = nums.length
    const arr = new Array(length-1).fill(0).map(() => new Array(2).fill(0))
    const middle = new Array(length-1).fill(0).map(() => new Array(2).fill(0))
    const sum1 = 0
    const sum2 = 0
    let
    for (let i = 0; i < length-1; i++) {
        sum1 = nums[i] + nums[i+1]
        for (let j = i+1; j < length; j++) {
            sum2 = nums[j] + nums[j+1]
            if (sum1 === sum2) {
                return true
            }
        }

    }
};
// @lc code=end

