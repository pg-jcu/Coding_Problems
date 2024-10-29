impl Solution {
    pub fn number_of_matches(n: i32) -> i32 {
        let mut n = n;
        let mut result = 0;

        while (n > 1) {
            if n % 2 == 0 {
                result += n / 2;
                n /= 2;
            } else {
                result += (n - 1) / 2;
                n = (n - 1) / 2 + 1;
            }
        }

        result
    }
}
