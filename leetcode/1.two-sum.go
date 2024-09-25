/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
    m := make(map[int]int)
	for i, n := range nums {
		complement := target - n
		if val, ok := (m[complement]); ok {
			return []int{val, i}
		}
		m[n] = i
	}
	return nil
}
// @lc code=end

