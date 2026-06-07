class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const q = new Queue();

        for(let s of students) {
            q.push(s);
        }

        let res = students.length;
        for(let sandwich of sandwiches) {
            let cnt = 0;
            while(cnt < q.size() && q.front() !== sandwich) {
                cnt++;
                q.push(q.pop());
            }
            
            if(q.pop() !== sandwich) break;

            res--;
        }

        return res;
    }
}
