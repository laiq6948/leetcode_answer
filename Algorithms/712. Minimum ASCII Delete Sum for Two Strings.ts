function minimumDeleteSum(s1: string, s2: string): number {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, (_) => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1[i - 1].charCodeAt(0);
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2[j - 1].charCodeAt(0);
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1[i - 1].charCodeAt(0),
          dp[i][j - 1] + s2[j - 1].charCodeAt(0)
        );
      }
    }
  }
  return dp[m][n];
}
