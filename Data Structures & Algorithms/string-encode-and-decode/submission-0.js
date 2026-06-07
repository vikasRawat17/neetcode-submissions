class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res='';
        for(const s of strs){
            res+=s.length+"#"+s
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

    let i=0;
    let res=[];
    while(i<str.length){
        let j=i;

        while(str[j]!=="#")j++;
        let len=parseInt(str.slice(i,j));
        let w= str.slice(j+1,j+1+len)
        res.push(w);
        i=j+1+len;
    }
    return res;
    }
}
