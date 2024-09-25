/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
   if (s.length !== t.length) return false;

   const count = new Array(26).fill(0);
   let cCode = "a".charCodeAt(0);
   for (let i = 0; i < s.length; i++) {
      count[s.charCodeAt(i) - cCode]++;
      count[t.charCodeAt(i) - cCode]--;
   }

   for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
         return false;
      }
   }

   return true; // t - O(n); S - O(1);
   // const map = new Map()

   // if(s.length !== t.length) return false
   // for(let i = 0; i < s.length; i++){
   //     map.set(s[i], (map.get(s[i]) || 0) + 1);
   // }
   // for(let i = 0; i < t.length; i++){
   //     if (!map.has(t[i])) {
   //         return false;
   //     }
   //     const count = map.get(t[i]);
   //     if (count === 1) {
   //         map.delete(t[i]);
   //     } else {
   //         map.set(t[i], count - 1);
   //     }
   // }
   // return map.size === 0  // t - O(n); S - O(n);
};
// @lc code=end

