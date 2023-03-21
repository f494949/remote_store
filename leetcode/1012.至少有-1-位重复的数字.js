/*
 * @lc app=leetcode.cn id=1012 lang=javascript
 *
 * [1012] 至少有 1 位重复的数字
 */

const { default: cluster } = require("cluster");

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
        for (let i = 2; i <= num; i++) {
            total *= i
        }
        return total
    }

    //位数小于n的个数
    //n若为1000，length=4，三位数有9*9*8+9*9+9个不重复数字
    let count = 0
    let length = n.toString().length
    for (let i = 1; i < length; i++) {
        count += 9 * cumulate(9) /cumulate(9-i+1)        
    }

    //位数等于n的个数
    //n=9527,length=4
    //第一轮 i=3，single=9,j=1   
    let num = n 
    let digital = new Set()
    for (let i = length-1; i >= 0 ; i--) {
        let single = Math.floor(num / Math.pow(10, i))
        for (let j = i === length-1 ? 1 : 0; j < single; j++) {
            if (!digital.has(j)) {
                count += cumulate(10-length+i) / cumulate(10-length)
            }
        }
        if (digital.has(single)) {
            break
        }
        digital.add(single)
        num -= single * Math.pow(10, i)
    }

    //n本身为重复数
    let self = false // if the number itself has duplicate digits
    let used = new Set()
    for (let i = 0; i < length; i++) {
      let digital = Math.floor(n / Math.pow(10, i)) % 10
      if (used.has(digital)) {
        self = true
        break
      }
      used.add(digital)
    }
    if (!self) {
      count++
    }

    //输出重复数的个数
    return n - count
};
// @lc code=end

