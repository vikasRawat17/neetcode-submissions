class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left=1;
        let right=Math.max(...piles);
      let ans=right;        

        while(left<=right){
             let hours=0
        const mid = left + Math.floor((right - left) / 2);
        

           for(let p of piles){
            hours+=Math.ceil(p/mid);
           }        
           if(hours<=h){
            ans=mid;
            right=mid-1
           }else{
            left=mid+1
           }
        }
        return ans;
    }
}
