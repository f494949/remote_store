/*
 * @lc app=leetcode.cn id=42 lang=golang
 *
 * [42] 接雨水
 */

// @lc code=start
package leetcode

func trap(height []int) int {

	left, right, sum := 0, len(height)-1, 0
	for left <= right {
		if height[left] <= height[right] {
			
		}
	}

	return sum
}
// @lc code=end

