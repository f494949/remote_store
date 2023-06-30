/*
 * @lc app=leetcode.cn id=2490 lang=golang
 *
 * [2490] 回环句
 */

// @lc code=start
package leetcode

func isCircularSentence(sentence string) bool {
	n := len(sentence)
	if sentence[0] != sentence[n-1] {
		return false
	}

	for i:=0;i<n;i++{
		if sentence[i] == "" && sentence[i+1] != sentence[]
	}


	return true
}
// @lc code=end

