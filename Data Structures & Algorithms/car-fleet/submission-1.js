class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];

        const aravilTimeAre = position
            .map((pos, index) => ({ pos, speed: speed[index] }))
            .sort((a, b) => b.pos - a.pos)
            .map((conf) => (target - conf.pos) / conf.speed);

        for (let time of aravilTimeAre) {
            const lastElemTime = stack.at(-1) ?? -Infinity;

            if (lastElemTime >= time) continue;

            stack.push(time);
        }

        return stack.length;
    }
}
