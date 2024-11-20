impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        let mut result = vec![1; (row_index + 1) as usize];

        for i in 1..row_index {
            for j in (1..=i).rev() {
                result[j as usize] += result[(j - 1) as usize];
            }
        }

        result
    }
}
