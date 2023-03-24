/*
 * @lc app=leetcode.cn id=2373 lang=javascript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    //grid.length = maxLocal.length + 2
    //grid.length = grid[i].length
    //第一个3*3矩阵中心为6，坐标为(1，1)
    const length = grid.length-2
    const maxLocal = new Array(length).fill(0).map(() => new Array(length).fill(0))
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            for (let k = i; k < i+3; k++) {
                for (let l = j; l < j+3; l++) {
                    maxLocal[i][j] = Math.max(maxLocal[i][j], grid[k][l])
                }
            }

        }
    }
    return maxLocal
};
// @lc code=end

