function minPathSum(grid: number[][]): number {
  const m: number = grid.length;
  const n: number = grid[0].length;
  const dp = grid;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (i === 0) {
        dp[i][j] = dp[i][j] + dp[i][j - 1];
        continue;
      }
      if (j === 0) {
        dp[i][j] = dp[i][j] + dp[i - 1][j];
        continue;
      }

      dp[i][j] = dp[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}
