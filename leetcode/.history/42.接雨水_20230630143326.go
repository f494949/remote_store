/*
 * @lc app=leetcode.cn id=42 lang=golang
 *
 * [42] 接雨水
 */

// @lc code=start
package leetcode

func trap(height []int) int {
	left, right, maxLeft, maxRight, sum := 0, len(height)-1, 0, 0, 0
	for left <= right {
		if height[left] <= height[right] {
			if height[left] > maxLeft {
				maxLeft = height[left]
			} else {
				sum += maxLeft - height[left]
			}
			left++
		} else {
			if height[right] > maxLeft {
				maxRight = height[right]
			} else {
				sum += maxRight - height[right]
			}
			right--
		}
	}
	return sum
}

// @lc code=end
