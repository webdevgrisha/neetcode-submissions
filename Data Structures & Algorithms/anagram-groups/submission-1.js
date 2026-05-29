function getAnagramHash(anagram) {
    const arr = new Array(26).fill(0);

    for (let char of anagram) {
        const pos = char.charCodeAt(0) - "a".charCodeAt(0);

        arr[pos]++;
    }

    return arr.join(".");
}

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();

        for (let str of strs) {
            const strHash = getAnagramHash(str);

            if (hashMap.has(strHash)) {
                hashMap.get(strHash).push(str);
            } else {
                hashMap.set(strHash, [str]);
            }
        }

        return Array.from(hashMap.values());
    }
}
