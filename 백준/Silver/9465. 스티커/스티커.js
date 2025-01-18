const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const solution = () => {
	const N = Number(input.shift());

	for (let i = 0; i < N; i++) {
		const L = Number(input[i * 3]);
		const first = input[i * 3 + 1].split(' ').map(Number);
		const second = input[i * 3 + 2].split(' ').map(Number);
		const dp = Array.from({ length: 3 }, () => Array.from({ length: L }, () => 0));

		dp[0][0] = first[0];
		dp[1][0] = second[0];

		for (let j = 1; j < L; j++) {
			dp[0][j] = Math.max(dp[1][j - 1], dp[2][j - 1]) + first[j];
			dp[1][j] = Math.max(dp[0][j - 1], dp[2][j - 1]) + second[j];
			dp[2][j] = Math.max(dp[0][j - 1], dp[1][j - 1]);
		}

		console.log(Math.max(dp[0][L - 1], dp[1][L - 1], dp[2][L - 1]));
	}
};

solution();