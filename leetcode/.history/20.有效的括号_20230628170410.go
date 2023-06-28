/*
 * @lc app=leetcode.cn id=20 lang=golang
 *
 * [20] 有效的括号
 */

// @lc code=start
package leetcode

func isValid(s string) bool {
	if len(s) == 0 {
		return true
	}

	stack := make([]rune, 0)
	for _, v := range s {
		if v == '(' || v == '{' || v == '[' {
			stack = append(stack, v)
		} else if v == ')' && len(stack) > 0 && stack[len(stack)-1] == '(' || v=='}' &&
				len(stack) > 0 && stack[len()s] {
			stack = stack[:len(stack)-1]
		} else {
			return false
		}
	}
}
// @lc code=end

