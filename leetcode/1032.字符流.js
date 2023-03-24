/*
 * @lc app=leetcode.cn id=1032 lang=javascript
 *
 * [1032] 字符流
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {character} letter
 * @return {boolean}
 */
class StreamChecker {
  constructor(words) {
    this.trie = this.buildTrie(words)
    this.stack = []
  }

  buildTrie(words) {
    let root = {}

    for (const word of words) {
      const len = word.length
      let node = root

      for (let i = len - 1; i >= 0; i--) {
        const c = word[i]

        if (!node[c]) node[c] = {}
        node = node[c]
      }

      node['isEnd'] = true
    }

    return root
  }

  query(letter) {
    let node = this.trie

    this.stack.push(letter)

    if (!node[letter]) return false

    for (let i = this.stack.length - 1; i >= 0; i--) {
      const c = this.stack[i]

      if (!node[c]) return false
      node = node[c]

      if (node['isEnd']) return true
    }

    return false
  }
}

/**
 * Your StreamChecker object will be instantiated and called as such:
 * var obj = new StreamChecker(words)
 * var param_1 = obj.query(letter)
 */
// @lc code=end
