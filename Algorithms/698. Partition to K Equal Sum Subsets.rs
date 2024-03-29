impl Solution {
    pub fn can_partition_k_subsets(nums: Vec<i32>, k: i32) -> bool {
        let n = nums.len();
        let sum: i32 = nums.iter().sum();
        if sum % k != 0 {
            return false;
        }
        let mut visited: Vec<bool> = vec![false; n];
        Self::search(0, 0, k as usize, &mut visited, &nums, n, sum / k)
    }

    fn search(
        start: usize,
        sum: i32,
        k: usize,
        visited: &mut Vec<bool>,
        nums: &[i32],
        n: usize,
        target: i32,
    ) -> bool {
        if k == 0 {
            return true;
        }
        for i in start..n {
            if visited[i] {
                continue;
            }
            visited[i] = true;
            if sum + nums[i] < target
                && Self::search(i + 1, sum + nums[i], k, visited, nums, n, target)
            {
                return true;
            }
            if sum + nums[i] == target && Self::search(0, 0, k - 1, visited, nums, n, target) {
                return true;
            }
            visited[i] = false;
        }
        false
    }
}
