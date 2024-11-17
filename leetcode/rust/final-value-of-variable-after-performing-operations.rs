impl Solution {
    pub fn final_value_after_operations(operations: Vec<String>) -> i32 {
        operations.iter().fold(
            0,
            |acc, cur| if cur.contains("+") { acc + 1 } else { acc - 1 },
        )
    }
}
