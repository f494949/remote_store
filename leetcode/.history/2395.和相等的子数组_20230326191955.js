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
    const arr = new Array
    const middle = []
    for (let i = 0; i < length-1; i++) {
        middle = arr[nums[i], nums[i+1]]
        if (middle === arr[])
    }
};
// @lc code=end

