function firstMissingPositive(nums: number[]): number {
  const n = nums.length;
  let i = 0;
  while (i < n) {
    const j = nums[i] - 1;
    if (j === i || j < 0 || j >= n || nums[i] === nums[j]) {
      i++;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  const result = nums.findIndex((v, i) => v !== i + 1);
  return (result === -1 ? n : result) + 1;
}
