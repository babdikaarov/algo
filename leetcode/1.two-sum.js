/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
       const complement = target - nums[i];
       if (map.has(complement)) {
          return [map.get(complement), i];
       }
       map.set(nums[i], i);
    }
    return []
};
// @lc code=end

