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

// 1.台阶共n级，对应下标 0 ~ n-1,加上登顶的一步则是 0 ~ n，故需创建一个长度为n+1的数组
// 2.设dp[i]为到达i层台阶所需最低花费,cost[i]为第i层往上走所需花费
// 3.显然dp[0]=dp[1]=0,因为选择台阶开始爬楼梯时不需要花费
// 4.dp[i] = min {dp[i-1] + cost[i-1], dp[i-2] + cost[i-2]}
var minCostClimbingStairs = function(cost) {

};
// @lc code=end

