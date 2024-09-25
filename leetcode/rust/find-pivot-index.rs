impl Solution {
    pub fn pivot_index(nums: Vec<i32>) -> i32 {
        let mut right_sum: i32 = nums.iter().sum();
        let mut left_sum = 0;

        for i in 0..nums.len() {
            right_sum -= nums[i];

            if (left_sum == right_sum) {
                return i as i32;
            }

            left_sum += nums[i];
        }

        -1
    }
}
