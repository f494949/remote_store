/*
 * @lc app=leetcode.cn id=1039 lang=javascript
 *
 * [1039] 多边形三角剖分的最低得分
 */

// @lc code=start
/**
 * @param {number[]} values
 * @return {number}
 */
var minScoreTriangulation = function(values) {
    let map = new Map()
    const n = values.length
    const dp = (i, j) => {
        if (i + 2 > j) {
            return 0
        }
        if (i + 2 === j) {
            return values[i] * values[i+1] * values[j]
        }

        let key = i * n + j
        if (!map.has(key)) {
            let num = Number.MAX_VALUE
            for (let k = i+1; k < j; k++) {
                num = Math.min(num, values[i] * values[j] * values[k] + dp(i,k) + dp(k, j))
            }
            map.set(key, num)
        }
        return map.get(key)
    }
    return dp(0, n-1)
};
// @lc code=end

