/*
 * @lc app=leetcode.cn id=1626 lang=javascript
 *
 * [1626] 无矛盾的最佳球队
 */

// @lc code=start
/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
    const length = scores.length
    const people = new Array(length).fill(0).map(() => new Array(2).fill(0))
    for (let i = 0; i < length; i++) {
        people[i] = [scores[i], ages[i]]
    }
    people.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
    let value = 0
    let team = new Array(length).fill(0)
    for (let i = 0; i < length; i++) {
        for (let j = i-1; j >= 0; j--) {
            if (people[j][1] <= people[i][1]) {
                team[i] = Math.max(team[j] , team[i])
            }
        }
        team[i] += people[i][0]
        value = Math.max(value,team[i])

    }
    return value
};
// @lc code=end

