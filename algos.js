// 1971. Find if Path Exists in Graph

// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.

var validPath = function(n, edges, source, destination) {
    if (source === destination) return true;

    // Create an adjacency list
    const adjList = new Array(n).fill(0).map(() => []);
    edges.forEach(([u, v]) => {
        adjList[u].push(v);
        adjList[v].push(u);
    });

    // BFS setup
    const queue = [source];
    const visited = new Set();
    visited.add(source);

    // BFS loop
    while (queue.length) {
        const node = queue.shift();
        for (let neighbor of adjList[node]) {
            if (neighbor === destination) return true;
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }

    return false;
}