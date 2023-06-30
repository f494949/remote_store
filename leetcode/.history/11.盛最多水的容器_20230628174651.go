/*
 * @lc app=leetcode.cn id=11 lang=golang
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
package leetcode

func maxArea(height []int) int {
	start, end, volume := 0, len(height)-1, 0

	for start < end {
		width := end - start
		high := 0
		if height[start] < height[end] {
			high = height[start]
			start++
		} else {
			high = height[end]
			end--
		}

		temp := width
	}

	return volume
}

// @lc code=end
