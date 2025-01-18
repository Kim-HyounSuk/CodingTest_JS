const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n').map(Number);

const solution = () => {
	const N = input[0];
	const dp = new Array(N + 1);

	dp[1] = input[1];
	dp[2] = dp[1] + input[2];
	dp[3] = Math.max(input[1], input[2]) + input[3];

	for (let i = 4; i <= N; i++) {
		dp[i] = Math.max(dp[i - 3] + input[i - 1] + input[i], dp[i - 2] + input[i]);
	}

	console.log(dp[N]);
};

solution();