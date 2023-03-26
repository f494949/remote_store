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
    const n = nums.length;
    const seen = new Set();
    for (let i = 0; i < n - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (seen.has(sum)) {
            return true;
        }
        seen.add(sum);
    }
    return false;
}
// @lc code=end

