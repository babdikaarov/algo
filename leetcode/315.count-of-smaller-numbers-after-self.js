/*
 * @lc app=leetcode id=315 lang=javascript
 *
 * [315] Count of Smaller Numbers After Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let l = 0;
    while (l < nums.length) {
        let count = 0;
        let r = l + 1;
        
        while (r < nums.length) {
            if (nums[r] < nums[l]) {
                count++;
            }
            r++;
        }
        
        nums[l] = count;
        l++;
    }
    
    return nums;
};
    // for(let i = 0; i < nums.length; i++){
    // let counts = 0
    //     for(let j = i + 1 ; j < nums.length; j++){
    //         if(nums[j] < nums[i]){
    //             counts++
    //         }
    //     }
    //     nums[i] = counts
    // }
// @lc code=end

