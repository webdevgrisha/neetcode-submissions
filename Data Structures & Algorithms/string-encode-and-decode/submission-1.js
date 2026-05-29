class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodeStr = "";

        for (let str of strs) {
            encodeStr += `${str.length}#${str}`;
        }

        return encodeStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodeStr = [];

        let index = 0;

        while(index < str.length) {
            let dilimIndex = str.indexOf('#', index);
            const len = +str.slice(index, dilimIndex);

            const word = str.slice(dilimIndex + 1, dilimIndex + 1 + len);
            decodeStr.push(word);

            index = dilimIndex + 1 + len;
        }

        return decodeStr;
    }
}
