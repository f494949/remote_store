/*
 * @lc app=leetcode.cn id=746 lang=javascript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */

// 动态规划
// 1.台阶共n级，对应下标 0 ~ n-1,加上登顶的一步则是 0 ~ n，故需创建一个长度为n+1的数组
// 2.设dp[i]为到达i层台阶所需最低花费,cost[i]为第i层往上走所需花费
// 3.显然dp[0]=dp[1]=0,因为选择台阶开始爬楼梯时不需要花费
// 4.因为可以选择上一级台阶还是上两级台阶，故第i层的最低花费应该是i-1层最低花费加上wang与i-2层中的最小值，则状态转移方程：dp[i] = min {dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]}
// 5.最终到达楼梯顶部的最低花费为dp[n]

// 执行用时：72 ms, 在所有 JavaScript 提交中击败了28.85%的用户
// 内存消耗：41.4 M, 在所有 JavaScript 提交中击败了90.46%的用户
var minCostClimbingStairs = function(cost) {
    const n = cost.length
    const dp = new Array(n+1)
    dp[0] = dp[1] = 0
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i-1], dp[i-2] + cost[i-2])
    }
    return dp[n]
};
// @lc code=end

