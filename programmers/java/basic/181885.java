// 할일 목록

import java.util.ArrayList;

class Solution {
    public String[] solution(String[] todo_list, boolean[] finished) {
        ArrayList<String> result = new ArrayList<>();
        
        for (int i = 0; i < todo_list.length; i++) {
            if (!finished[i]) {
                result.add(todo_list[i]);
            }
        }
        
        return result.toArray(String[]::new);
    }
}