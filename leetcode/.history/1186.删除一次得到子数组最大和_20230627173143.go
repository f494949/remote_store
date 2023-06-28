/*
 * @lc app=leetcode.cn id=1186 lang=golang
 *
 * [1186] 删除一次得到子数组最大和
 */

// @lc code=start
package leetcode

func maximumSum(arr []int) int {
	dp0, dp1, sum := arr[0], 0, arr[0]
	for i := 1; i < len(arr); i++ {
		// dp0, dp1 = 
		dp0, dp1 = max(dp0, 0)+arr[i], max(dp1+arr[i], dp0)
	}
	return sum
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

// @lc code=end

