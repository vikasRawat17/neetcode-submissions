class Solution {
    public boolean hasDuplicate(int[] nums) {


       Set <Integer> dup=new HashSet<>();
       for(int n:nums){
        if(!dup.add(n)){
return true;
        }
       }
       return false;
    }
}