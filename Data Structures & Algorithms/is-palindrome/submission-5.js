class Solution {
    isAlphaNum(chur) {
        return chur.match(/[a-z0-9]/i);
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let p1 = 0;
        let p2 = s.length - 1;

        while (p1 <= p2) {
            const [p1Val, p2Val] = [s[p1].toLowerCase(), s[p2].toLowerCase()];

            if (!this.isAlphaNum(p1Val)) {
                p1++;
                continue;
            }

            if (!this.isAlphaNum(p2Val)) {
                p2--;
                continue;
            }

            if (p1Val !== p2Val) return false;

            p1++;
            p2--;
        }

        return true;
    }
}
