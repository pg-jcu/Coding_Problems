// n개 간격의 원소들

import java.util.ArrayList;

class Solution {
    public int[] solution(int[] num_list, int n) {
        ArrayList<Integer> result = new ArrayList<>();
        
        for (int i = 0; i < num_list.length; i += n) {
            result.add(num_list[i]);
        }
        
        return result.stream().mapToInt(v -> v).toArray();
    }
}