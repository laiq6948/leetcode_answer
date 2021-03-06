impl Solution {
    pub fn next_permutation(nums: &mut Vec<i32>) {
        if let Some(i) = (1..nums.len()).rev().find(|&i| nums[i - 1] < nums[i]) {
            let j = (i..nums.len()).rev().find(|&j| nums[i - 1] < nums[j]).unwrap();
            nums.swap(i - 1, j);
            nums[i..].reverse();
        } else {
            nums.reverse();
        };
    }
}
