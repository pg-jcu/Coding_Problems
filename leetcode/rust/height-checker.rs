impl Solution {
    pub fn height_checker(heights: Vec<i32>) -> i32 {
        let mut expected = heights.clone();
        expected.sort();

        heights
            .iter()
            .zip(expected.iter())
            .filter(|(h1, h2)| h1 != h2)
            .count() as i32
    }
}
