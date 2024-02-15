const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n] = input.shift().split(" ").map(Number);

const map = input.map((row) => row.trim().split("").map(Number));
const complex = [];
const [dirX, dirY] = [
  [0, 0, -1, 1],
  [-1, 1, 0, 0],
];

const bfs = (startX, startY) => {
  const visited = [];
  const queue = [[startX, startY]];

  while (queue.length) {
    const [curX, curY] = queue.shift();

    if (!map[curX][curY]) continue;

    map[curX][curY] = 0;
    visited.push([curX, curY]);

    // 상하좌우 판별
    for (let i = 0; i < 4; i++) {
      const nextX = curX + dirX[i];
      const nextY = curY + dirY[i];

      // 다음 좌표 판별
      if (nextX < 0 || nextY < 0 || nextX >= n || nextY >= n) continue;

      if (map[(nextX, nextY)]) queue.push([nextX, nextY]);
    }
  }

  complex.push(visited);
};

const solution = () => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j]) bfs(i, j);
    }
  }

  // 오름차순 정렬
  complex.sort((a, b) => a.length - b.length);

  // 정답 출력
  console.log(
    `${complex.length}\n${complex.map((arr) => arr.length).join("\n")}`
  );
};

solution();
