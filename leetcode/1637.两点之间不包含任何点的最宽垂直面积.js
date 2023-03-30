/*
 * @lc app=leetcode.cn id=1637 lang=javascript
 *
 * [1637] 两点之间不包含任何点的最宽垂直面积
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    const length = points.length
    const arr = []
    let j = 1
    points.sort((a,b) => a[0] - b[0])
    for (let i = 0; i < length-1; i++) {
        const count = points[j][0] - points[i][0]
        arr[i] = count
        j++
    }
    return Math.max(...arr)
};
// @lc code=end

