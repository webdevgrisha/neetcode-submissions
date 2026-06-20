class Solution {
    /**
     * @param {string[]} deadends
     * @param {string} target
     * @return {number}
     */
    openLock(deadends, target) {
        const visited = new Set(deadends);

        if (visited.has("0000")) return -1;

        function children(lock) {
            const result = [];

            for (let i = 0; i < 4; i++) {
                const up = lock.split("");
                up[i] = (+up[i] + 1) % 10;

                const down = lock.split("");
                down[i] = (+down[i] - 1 + 10) % 10;

                result.push(up.join(""), down.join(""));
            }

            return result;
        }

        const q = new Queue([["0000", 0]]);
        visited.add('0000');

        while (q.size()) {
            const [lock, turns] = q.pop();

            if (lock === target) return turns;

            for (let child of children(lock)) {
                if (visited.has(child)) continue;

                visited.add(child);
                q.push([child, turns + 1]);
            }
        }

        return -1;
    }
}
