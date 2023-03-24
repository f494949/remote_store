/*
 * @lc app=leetcode.cn id=2488 lang=javascript
 *
 * [2488] 统计中位数为 K 的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1.求中位数为 K，那么其它数字可以分为两个部分，大于 K 和小于 K，我们可以将小于、等于、大于转换成 -1， 0， 1。
// 2.要满足中位数为 K，那么子数组需要达到“平衡”，总和为 0，或者总和为 1（中位数在中间靠左）。
// 3.记录第 i 个数字的前缀和
// 4.用 pos 记录，每个前缀和结果出现的次数，也就是两个数中间的区间（左开右闭）就是符合条件的子数组（由于目标子数组必须包含 K，这里只需要统计到数字 K 之前就行）。
// 5.从 K 的位置开始，如果位置 i 的前缀和为 n，那么以 i 为结尾的平衡子数组就有 pos[n] + pos[n - 1] 个，累加起来就是答案。
// 6.来骗来偷袭

var countSubarrays = function(nums, k) {
    let index = 0
    // 将数字转换成大于、等于、小于
    const arr = nums.map((item, i) => {
        if (item === k) {
            index = i
            return 0
        } else if (item < k) {
            return -1
        } else {
            return 1
        }
    })
    // 记录前缀和
    const sum = new Array(nums.length + 1).fill(0)
    for (let i = 1; i < sum.length; i ++) {
        sum[i] = sum[i - 1] + arr[i - 1]
    }
    // 记录上一次出现的次数
    const pos = {}
    let ans = 0
    for (let i = 0; i < sum.length; i ++) {
        const n = sum[i]
        if (i <= index) {
            pos[n] = (pos[n] ?? 0) + 1
            continue
        }
        // 在中间 || 在中间靠左
        ans += (pos[n] ?? 0)
        ans += (pos[n - 1] ?? 0)
    }
    return ans
};
// @lc code=end

