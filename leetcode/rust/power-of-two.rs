impl Solution {
    pub fn is_power_of_two(n: i32) -> bool {
        if n < 1 {
            return false;
        }

        let mut n = n;

        while n % 2 == 0 {
            n /= 2;
        }

        n == 1
    }
}
