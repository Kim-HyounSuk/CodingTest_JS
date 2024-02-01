const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const numOfComs = Number(input.shift());
const numOfOnline = Number(input.shift());

// 그래프 초기화
const graph = [...Array(numOfComs + 1)].map(() => []);

// 그래프 생성
for (let i = 0; i < numOfOnline; i++) {
  const [from, to] = input[i].split(" ").map(Number);

  graph[from].push(to);
  graph[to].push(from);
}

// DFS 구현
const dfs = (graph, start) => {
  let stack = [start];
  const visited = [];

  while (stack.length) {
    // 현재 노드
    const node = stack.pop();

    // 현재 노드를 방문하지 않은 경우
    if (!visited.includes(node)) {
      // 현재 노드의 방문 기록 추가
      visited.push(node);

      // 현재 노드와 연결된 하위 노드를 스택에 추가
      stack = [...stack, ...graph[node]];
    }
  }

  return visited;
};

// 출력
console.log(dfs(graph, 1).length - 1);