/*
 * @lc app=leetcode.cn id=1012 lang=javascript
 *
 * [1012] 至少有 1 位重复的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

//n最多为8位，若n为9位，则为重复数字
// 若n为4位数，则3位数不重复的数字，百位上有1-9这9种选择，十位上是0-9排除了百位数后9种选择，个位是8种
//以此类推，在不重复且长度小于length一位的数字最多9*9*8……*2个
var numDupDigitsAtMostN = function(n) {
    const cumulate = (num) => {
        let total = 1
        for (let i = 9; i > 9-num; i--) {
            total *= i
        }
        return total
    }

    //位数小于n的个数
    //n若为1000，length=4，三位数有9*9*8+9*9+10个不重复数字
    let count = 0
    let length = n.toString.length
    for (let i = 1; i < length; i++) {
        count += 9 * cumulate(length-i-1)
    }
    if


};
// @lc code=end

