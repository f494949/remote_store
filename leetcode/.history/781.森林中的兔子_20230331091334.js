/*
 * @lc app=leetcode.cn id=781 lang=javascript
 *
 * [781] 森林中的兔子
 */

// @lc code=start
/**
 * @param {number[]} answers
 * @return {number}
 */

// 1.若为递增或递减则最少数量为数组之和+元素个数
// 2.若元素全部相同，则最少数量为元素值+1
// 3.若有n个元素值，其中i个元素相同，则最少数量为相同元素值+1+n-i+其他元素值

// 有4只兔子说看见其他3只，则至少 4/3+1种不同颜色（同一种颜色都包含在内）
// 有4只兔子说看见其他

var numRabbits = function(answers) {
    const count = new Map();
    for (const y of answers) {
        count.set(y, (count.get(y) || 0) + 1);
    }
    let ans = 0;
    for (const [y, x] of count.entries()) {
        ans += Math.floor((x + y) / (y + 1)) * (y + 1);
    }
    return ans;
};

// @lc code=end

