class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const n = students.length;

        let res = n;
        let index = 0;
        for(let sandwich of sandwiches) {
            let cnt = 0;
            while(cnt < n && students[index] !== sandwich) {
                cnt++;
                index++;
                index %= n;
            }

            if(students[index] !== sandwich) break;

            students[index] = -1;
            res--;
        }

        return res;
    }
}
