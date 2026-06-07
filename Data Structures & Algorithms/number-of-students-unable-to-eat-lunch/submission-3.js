class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const q = Queue.fromArray(students);

        let res = students.length;
        for (let sandwich of sandwiches) {
            let cnt = 0;
            while (cnt < q.size() && q.front() !== sandwich) {
                cnt++;
                q.push(q.pop());
            }

            if (q.pop() !== sandwich) break;

            res--;
        }

        return res;
    }
}
