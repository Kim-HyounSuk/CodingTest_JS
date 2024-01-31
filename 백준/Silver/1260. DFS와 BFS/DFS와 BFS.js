const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, m, v] = input.shift().split(" ").map(Number);
const graph = [...Array(n + 1)].map(() => []);

// 그래프 생성 (idx 0 은 편의를 위해 빈배열)
for (let i = 0; i < m; i++) {
  const [from, to] = input[i].split(" ").map(Number);

  graph[from].push(to);
  graph[to].push(from);
}

const dfs = (graph, startNode) => {
  let willVisit = [startNode];
  const visited = [];

  while (willVisit.length) {
    // 현재 순번 노드
    const node = willVisit.pop();

    // 방문기록이 없는 경우
    if (!visited.includes(node)) {
      // 현재 순번 노드 방문기록 추가
      visited.push(node);

      let nodes = graph[node];
      // 현재 순번 노드와 연결된 노드를 방문예정에 추가
      willVisit = [...willVisit, ...nodes.sort((a, b) => b - a)];
    }
  }

  return visited;
};

const bfs = (graph, startNode) => {
  let willVisit = [startNode];
  const visited = [];

  while (willVisit.length) {
    // 현재 순번 노드
    const node = willVisit.shift();

    // 방문기록이 없는 경우
    if (!visited.includes(node)) {
      // 현재 순번 노드 방문기록 추가
      visited.push(node);

      // 현재 순번 노드와 연결된 노드를 방문예정에 추가
      let nodes = graph[node];
      willVisit = [...willVisit, ...nodes.sort((a, b) => a - b)];
    }
  }

  return visited;
};

// 답
answer = [dfs(graph, v).join(" "), bfs(graph, v).join(" ")];

// 출력
console.log(answer.join("\n"));
