class Solution {
    public int[] topKFrequent(int[] nums, int k) {

        Map<Integer,Integer> map=new HashMap<>();


       for(int num:nums){
        map.put(num,map.getOrDefault(num,0)+1);
       }

       List<Map.Entry<Integer,Integer>> res=new ArrayList<>(map.entrySet());

       res.sort((a,b)->b.getValue()-a.getValue());

       int[] r=new int[k];

       for(int i=0;i<r.length;i++){
            r[i]=res.get(i).getKey();
       }
          return r;
    }
}
