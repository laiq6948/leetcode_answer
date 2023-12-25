function numDecodings(s: string): number {
  const n = s.length;
  const dp: number[] = new Array(n + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= n; i++) {
    if (s[i - 1] !== "0") {
      dp[i] = dp[i - 1];
    }
    if (i > 1 && (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6"))) {
      dp[i] += dp[i - 2];
    }
  }
  return dp[n];
}
