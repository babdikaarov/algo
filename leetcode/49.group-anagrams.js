/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
   let map = new Map();
   for (let str of strs) {
      let count = new Array(26).fill(0);
      let charA = "a".charCodeAt(0);
      for (let i = 0; i < str.length; i++) {
         count[str.charCodeAt(i) - charA]++;
      }

      let key = count.join("#"); // js references the value but not the content
      if (map.has(key)) {
         map.get(key).push(str);
      } else {
         map.set(key, [str]);
      }
   }
   return [...map.values()];
};
// @lc code=end

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
