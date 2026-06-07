class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const counter = students.reduce(
            (accum, curr) => {
                accum[curr]++;

                return accum;
            },
            { 0: 0, 1: 0 },
        );

        for (let sandwich of sandwiches) {
            if(counter[sandwich] === 0) break;
            
            counter[sandwich]--;
        }

        return counter[0] + counter[1];
    }
}
