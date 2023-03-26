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
    const sum1 = 0
    const sum2 = 0
    let judge = true
    for (let i = 0; i < length-1; i++) {
        sum1 = nums[i] + nums[i+1]
        for (let j = i+1; j < length; j++) {
            sum2 = nums[j] + nums[j+1]
            if (sum1 !== sum2) {
                judge
            }
        }

    }
};
// @lc code=end

