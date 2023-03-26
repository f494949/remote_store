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
    for (let i = 0; i < length-1; i++) {
        middle = arr[nums[i], nums[i+1]]
        for (let j = i+1; j < length; j++) {
            if (middle === arr[]) {}
        }
    }
};
// @lc code=end

