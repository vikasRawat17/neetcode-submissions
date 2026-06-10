class TimeMap {
     keyStore:Map<string,[number,string][]>;
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,[]);
        }
         this.keyStore.get(key)!.push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        if(!this.keyStore.has(key)){
            return ""
        }
        const arr=this.keyStore.get(key)
        let left=0;
        let right=arr.length-1;
        let ans="";


        while(left<=right){
        const mid = left + Math.floor((right - left) / 2);
        if(arr[mid][0]<=timestamp){
            ans=arr[mid][1];
            left=mid+1

        }else{
            right=mid-1;
        }


        }
        return ans;
    }
}
