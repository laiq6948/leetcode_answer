impl Solution {
    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let n = nums.len();
        let mut cur = vec![];
        let mut res = vec![];
        Self::dfs(0, &mut cur, &mut res, &nums, n);
        res
    }

    fn dfs(start: usize, cur: &mut Vec<i32>, all: &mut Vec<Vec<i32>>, nums: &[i32], n: usize) {
            all.push(cur.to_vec());
            if start == n {
                return;
            }
            for i in start..n {
                if i > start && nums[i] == nums[i - 1] {
                    continue;
                }
                cur.push(nums[i]);
                Self::dfs(i + 1, cur, all, nums, n);
                cur.pop();
            }
        }
}
