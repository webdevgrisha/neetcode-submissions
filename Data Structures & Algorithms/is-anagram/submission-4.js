class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const charsCount = new Array(26).fill(0);
        
        for(let i = 0; i < s.length; i++) {
            const sCharPos = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
            const tCharPos = t[i].charCodeAt(0) - 'a'.charCodeAt(0);

            charsCount[sCharPos]++;
            charsCount[tCharPos]--;
        }

        return !charsCount.filter(Boolean).length;
    }
}