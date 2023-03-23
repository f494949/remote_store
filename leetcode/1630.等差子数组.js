/*
 * @lc app=leetcode.cn id=1630 lang=javascript
 *
 * [1630] 等差子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */

//num = [4,6,5,9,3,7] sort[4,5,6]
//l = [0,2,2]
//r = [2,3,5]
//answer = [f,f,f]
//结果应为[t,f,t]

var checkArithmeticSubarrays = function(nums, l, r) {
    let judge = []
    let answer = []  
    for (let i = 0; i < l.length; i++) {
        for (let j = l[i]; j <= r[i]; j++) {
            judge.push(nums[j])
        }
        judge.sort((a,b) => a - b)
        answer[i] = true
        for (let k = judge.length-1; k > 0; k--) {
            if (judge[k] - judge[k-1] !== judge[1] - judge[0]) {
                answer[i] = false
                break
            }
        }
        judge.length = 0
    }
    return answer
};
// @lc code=end

