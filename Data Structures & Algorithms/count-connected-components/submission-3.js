class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const graph = new Map();

        for (let [a, b] of edges) {
            if (!graph.has(a)) {
                graph.set(a, []);
            }
            if (!graph.has(b)) {
                graph.set(b, []);
            }

            graph.get(a).push(b);
            graph.get(b).push(a);
        }

        const seen = new Set();
        let number = 0;

        for (let i = 0; i < n; i++) {
            if (seen.has(i)) continue;

            number++;

            const stack = [i];
            while (stack.length) {
                const node = stack.pop();
                if (seen.has(node)) continue;
                seen.add(node);

                for (let child of graph.get(node) ?? []) {
                    stack.push(child);
                }
            }
        }

        return number;
    }
}
